import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./component.scss";

import { firebaseAuth, firestore } from "../../../../services/firebase";
import ChatContent from "./components/ChatContent/ChatContent.jsx";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { GlobalUser, UserMessageObject } from "../../../../services/firebase-interfaces";

export default () => {
  const [user, setUser] = useState<GlobalUser>();
  const [dbUnsubNew, setDbUnsubNew] = useState<Function>(() => {});
  const [dbUnsubAll] = useState<Function>(() => {});
  const [allMessages, setAllMessages] = useState<UserMessageObject[]>([]);
  const [firstMessagesLoaded, setFirstMessagesLoaded] = useState<boolean>(false);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();

  const { channelID } = useParams();
  const navigate = useNavigate();

  const allowedIDs = ["CncDCmptac", "CmprtlhmntDMtrs"];

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
    <div className="app-window">
      <div className="col2">
        <ChatContent
          user={user as GlobalUser}
          channelID={channelID || ""}
          allMessages={allMessages}
          setAllMessages={setAllMessages}
          lastVisible={lastVisible}
          setLastVisible={setLastVisible}
        />
      </div>
    </div>
  );
};
