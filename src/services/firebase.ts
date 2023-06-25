import {
  getAuth,
  signInWithPopup,
  signInAnonymously,
  onAuthStateChanged,
  GoogleAuthProvider,
  UserCredential,
  FacebookAuthProvider,
  User,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

export const firestore = {
  addSuggestion: async (suggestion: suggestionType) => {
    return await addDoc(collection(fdb, "suggestions"), {
      sender: suggestion.sender,
      suggestion: suggestion.suggestion,
      date: suggestion.date,
    });
  },
};

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
  getUser: (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            // Usuário está logado
            resolve(user);
          } else {
            // Usuário não está logado
            resolve(null);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
};
