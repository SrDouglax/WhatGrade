import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./component.scss";

import { firebaseAuth, firestore } from "../../../../services/firebase";
import ChatContent from "./components/ChatContent/ChatContent.jsx";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { GlobalUser, UserMessageObject } from "../../../../services/firebase-interfaces";
import { chats } from "../../Chats";

export default () => {
  const [user, setUser] = useState<GlobalUser>();
  const [dbUnsubNew, setDbUnsubNew] = useState<Function>(() => {});
  const [dbUnsubAll] = useState<Function>(() => {});
  const [allMessages, setAllMessages] = useState<UserMessageObject[]>([]);
  const [firstMessagesLoaded, setFirstMessagesLoaded] = useState<boolean>(false);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();

  const { channelID } = useParams();
  const navigate = useNavigate();

  const allowedIDs = [
    "CncDCmptc",
    "CmprtlhmntDMtrl",
    "Chtdvdsdsscs",
    "RdcLtrtr",
    "Extstcnlg",
    "HstrGrl",
    "LngsEstrngrs",
    "Ggrf",
    "Blg",
    "Flsf",
  ];
  if (!allowedIDs.includes(channelID || "")) {
    navigate("/chats");
  }

  useEffect(() => {
    firebaseAuth.getUser().then(({ hasUser, user }) => {
      if (hasUser) {
        setUser(user);
      }
    });

    firestore.getMessagesFromChannel(channelID || "", setAllMessages).then((e) => {
      setLastVisible(e.lastVisible);
      setFirstMessagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (firstMessagesLoaded) {
      firestore.onChangesInChannel(
        channelID || "",
        allMessages,
        setAllMessages,
        dbUnsubNew,
        setDbUnsubNew,
        dbUnsubAll
      );
    }
  }, [allMessages]);

  return (
    <>
      <h1 className="chatName">{`${
        chats.find((e) => {
          return e.link.slice(6) === channelID;
        })?.name
      }`}</h1>
      <ChatContent
        user={user as GlobalUser}
        channelID={channelID || ""}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
        lastVisible={lastVisible}
        setLastVisible={setLastVisible}
      />
    </>
  );
};
