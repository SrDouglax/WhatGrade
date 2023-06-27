import { useRef } from "react";
import "./component.scss";

import AllMessages from "./AllMessages/AllMessages";

import { firestore } from "../../../../../../services/firebase";
import { Timestamp } from "firebase/firestore";
import { GlobalUser } from "../../../../../../services/firebase-interfaces";

interface CompProps {
  allMessages: any;
  setAllMessages: Function;
  channelID: string;
  user: GlobalUser;
  lastVisible: any;
  setLastVisible: Function;
}

export default ({
  allMessages,
  setAllMessages,
  channelID,
  user,
  lastVisible,
  setLastVisible,
}: CompProps) => {
  const input = useRef<HTMLInputElement>();

  const loadMoreMessages = async () => {
    const isLastMessageInChat = await firestore.loadMoreMessagesFromChannel({
      channelID: channelID,
      setAllMessages,
      lastVisible,
      setLastVisible,
    });

    if (isLastMessageInChat === 0) {
      await setAllMessages((oldMessages: { type: string }[]) => {
        if (oldMessages[0]?.type !== "style") {
          return [{ type: "style", style: "line" }, ...oldMessages];
        }
        return oldMessages;
      });
    }
    return "loaded";
  };

  function handleDeleteMessage(messageID: string) {
    firestore.deleteMessage(channelID, messageID);
  }

  function handleNewMessage() {
    if ((input.current as HTMLInputElement).value.trim() !== "") {
      firestore.sendMessage(channelID, {
        type: "text",
        text: (
          document.getElementById("inputTextToSend") as HTMLInputElement
        ).value.trim(),
        attachments: [],
        timestamp: Timestamp.now(),
        sender: {
          name: user.name || user.displayName || "Anonymous",
          profilePicture: user.profilePicture || user.photoURL || "",
          id: user.uid,
        },
      });
      (document.getElementById("inputTextToSend") as HTMLInputElement).value = "";
    }
  }

  return (
    <div className="messagesContent">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <AllMessages
        messages={allMessages}
        user={user}
        deleteMessage={handleDeleteMessage}
        loadMoreMessages={loadMoreMessages}
      />

      <div className="bottomOptions">
        <div className="bottomOptions-text">
          <input
            ref={input as any}
            id="inputTextToSend"
            type="text"
            autoComplete="off"
            placeholder="Digite alguma coisa"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleNewMessage();
              }
            }}
          />
        </div>
        <div
          className="bottomOptions-send"
          onClick={() => {
            handleNewMessage();
          }}
        >
          <span className="material-symbols-sharp">send</span>
        </div>
      </div>
    </div>
  );
};
