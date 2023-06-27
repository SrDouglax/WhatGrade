import {
  getAuth,
  signInWithPopup,
  signInAnonymously,
  GoogleAuthProvider,
  FacebookAuthProvider,
  User as FiUser,
} from "firebase/auth";
import {
  DocumentReference,
  QueryDocumentSnapshot,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  endBefore,
  getDoc,
  getDocs,
  getFirestore,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { FormattedUserMessage, UserMessage, UserMessageObject, UserSendMessageObject, UserPermissionObject } from "./firebase-interfaces";

import { GlobalUser, DbUser } from "./firebase-interfaces";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fdb = getFirestore(app);

interface suggestionType {
  sender: string;
  suggestion: string;
  date: Date;
}

export const firebaseAuth = {
  signInWithGoogle: () => {
    return new Promise((resolve, reject) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          resolve(result.user);
        })
        .catch((error) => {
          console.error("Erro ao autenticar com o Google:", error);
          reject(error);
        });
    });
  },

  signInWithFacebook: () => {
    return new Promise((resolve, reject) => {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          resolve(result.user);
        })
        .catch((error) => {
          console.error("Erro ao autenticar com o Facebook:", error);
          reject(error);
        });
    });
  },

  signInAnonymously: () => {
    return new Promise((resolve, reject) => {
      signInAnonymously(auth)
        .then((result) => {
          resolve(result.user);
        })
        .catch((error) => {
          console.error("Erro ao autenticar anonimamente:", error);
          reject(error);
        });
    });
  },
  getUser: (ID?: string): Promise<{hasUser: boolean, user: GlobalUser | undefined}> => {
    if (ID === undefined) {
      // User from logged user
      return new Promise((resolve) => {
        auth.onAuthStateChanged((user: FiUser | null) => {
          if (user) {
            
            // User is authenticated
            getDoc(doc(collection(fdb, "users"), user.uid)).then((e) => {
              resolve({ hasUser: true, user: {...e.data(), ...user} as GlobalUser });
            });
          } else {
            // User doesn logged
            resolve({ hasUser: false, user: undefined });
          }
        });
      });
    } else {
      // User from ID provided
      return new Promise((resolve) => {
        // const getDate = (e: any): Date => { return e._document.createTime.timestamp.toDate(); }
        getDoc(doc(collection(fdb, "users"), ID)).then((e) => {
          // const createTime: Date = getDate(e);
          resolve({ hasUser: true, user: e.data() as GlobalUser });
        });
      });
    }
  },

  updateUser: (userId: string | undefined, data: any) => {
    const dbUsers = collection(fdb, "users");
    console.log(userId, data);
    
    return updateDoc(doc(dbUsers, userId), data);
  },

  signOut: (): any => {
    return auth.signOut();
  },
};

export const firestore = {
  // >-- Sugestions Functions --<
  addSuggestion: async (suggestion: suggestionType) => {
    return await addDoc(collection(fdb, "suggestions"), {
      sender: suggestion.sender,
      suggestion: suggestion.suggestion,
      date: suggestion.date,
    });
  },

  // >-- Chat Functions --<
  getMessagesFromChannel: async (
    channelID: string,
    setMessages: Function
  ): Promise<{
    lastVisible: QueryDocumentSnapshot;
    messages: FormattedUserMessage[];
  }> => {
    const myRef = collection(fdb, "channels", `/${channelID}/messages`);
    const myQuery = query(myRef, orderBy("timestamp", "asc"), limitToLast(4));
    const querySnapshot = await getDocs(myQuery);
    const getTimestamp = (e: any): Timestamp => {
      return e._document.createTime.timestamp;
    };
    let newMessages = [
      ...querySnapshot.docs.map((message) => ({
        id: message.id,
        ...(message.data() as UserMessage),
        timestamp: getTimestamp(message),
      })),
    ];

    setMessages(newMessages);
    return { lastVisible: querySnapshot.docs[0], messages: newMessages };
  },

  loadMoreMessagesFromChannel: async ({
    channelID,
    setAllMessages,
    lastVisible,
    setLastVisible,
  }: {
    channelID: string;
    setAllMessages: Function;
    lastVisible: QueryDocumentSnapshot;
    setLastVisible: Function;
  }) => {
    try {
      if (lastVisible) {
        // Definições e requisição de dados
        const myRef = collection(fdb, "channels", `/${channelID}/messages`);
        const myQuery = query(
          myRef,
          orderBy("timestamp", "asc"),
          endBefore(lastVisible),
          limitToLast(10)
        );
        const querySnapshot = await getDocs(myQuery);

        if (querySnapshot.docs.length !== 0) {
          // Gambiarra para pegar data de criação da mensagem no banco de dados
          const getTimestamp = (e: any): Timestamp => {
            return e._document.createTime.timestamp;
          };

          // Definindo array das novas mensagens
          let newMessages: Object[] = [
            ...querySnapshot.docs.map((message) => ({
              id: message.id,
              ...message.data(),
              timestamp: getTimestamp(message),
            })),
          ];
          await setAllMessages((oldAllMessages: Object[]) => {
            oldAllMessages.unshift(...newMessages);
            setLastVisible(querySnapshot.docs[0]);
            return oldAllMessages;
          });

          return undefined;
        } else {
          // Não há mais mensagens para carregar
          // console.log("Não há mais mensagens para carregar");
          return 0;
        }
      } else {
        // console.log("Não há mais mensagens para carregar");
        return 0;
      }
    } catch (error) {
      // Tratamento de erro na consulta
      console.log("Erro na consulta: ", error);
    }
  },

  onChangesInChannel: (
    channelID: string,
    currentMessages: UserMessageObject[],
    setMessages: Function,
    unsub: Function,
    setUnsub: Function,
    unsubAll: Function
  ) => {
    // To last messages
    unsub?.();
    const dbMessages = query(
      collection(fdb, "channels", `/${channelID}/messages`),
      orderBy("timestamp", "asc"),
      limitToLast(2)
    );

    // To all messages
    unsubAll?.();
    const dbAllMessages = query(
      collection(fdb, "channels", `/${channelID}/messages`),
      orderBy("timestamp", "asc")
    );

    // Add new messages
    const unsubTemp = onSnapshot(dbMessages, (querySnapshot) => {
      //const getTimestamp = (e: any): Timestamp => { return e._document.createTime.timestamp; }
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          if (!currentMessages.find((message) => message.id === change.doc.id)) {
            setMessages([
              ...currentMessages,
              { id: change.doc.id, ...change.doc.data() },
            ]);
          }
        }
      });
    });

    // Remove deleted messages
    const unsubAllTemp = onSnapshot(dbAllMessages, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "removed") {
          setMessages(currentMessages.filter((message) => message.id !== change.doc.id));
        }
      });
    });

    setUnsub(() => unsubTemp);
    setUnsub(() => unsubAllTemp);
  },

  sendMessage: (
    channelID: string,
    message: UserSendMessageObject
  ) => {
    const dbMessages = collection(fdb, "channels", `/${channelID}/messages`);
    addDoc(dbMessages, message);
  },

  deleteMessage: (channelID: string, messageID: string) => {
    const dbMessages = collection(fdb, "channels", `/${channelID}/messages`);
    deleteDoc(doc(dbMessages, messageID));
  },

  createChannel: async (
    communityID: string,
    channelName: string,
    channelDescription: string
  ) => {
    const channelsCollection = collection(fdb, `communities/${communityID}/channels`);
    let document: DocumentReference | null = null;

    await getDocs(channelsCollection).then(async (querySnapshot) => {
      const size = querySnapshot.size;
      await addDoc(channelsCollection, {
        name: channelName,
        description: channelDescription,
        index: size + 1,
      }).then((e) => {
        document = e;
      });
    });

    if (document) {
      return document;
    }
  },

  deleteChannel: async (communityID: string, channelID: string) => {
    const dbMessages = collection(fdb, "communities", `/${communityID}/channels`);
    return await deleteDoc(doc(dbMessages, channelID));
  },

  setPermission: (channelID: string, userPermission: UserPermissionObject) => {
    const dbPermissions = collection(fdb, "channels", `${channelID}/permissions`);
    return setDoc(doc(dbPermissions, userPermission.userID), userPermission);
  },
};
