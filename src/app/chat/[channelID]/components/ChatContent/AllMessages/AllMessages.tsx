import "./component.scss";

// <<---- Importações ---->> \\
import { useEffect, useRef, useState } from "react";

import Message from "./Message/Message";
import Toast from "../../../../../../components/Toast/Toast";

export default function AllMessages ({ messages, user, deleteMessage, loadMoreMessages }: any) {
  const [toast, setToast] = useState({
    show: false,
    text: "",
    icon: <></>,
    color: "#fff",
  });
  const bodyRef = useRef<HTMLElement>();

  const showToast = (text: any, icon: any, color: any) => {
    setToast({ show: true, text: text, icon: icon, color: color });
    setTimeout(() => {
      setToast({ show: false, text: text, icon: icon, color: color });
    }, 2100);
  };

  const handleScroll = (e: any) => {
    if (e.target.scrollTop <= 0) {
      const firstChild = bodyRef?.current?.firstChild as HTMLElement;
      const lastPoint = firstChild?.clientHeight;
      loadMoreMessages().then(() => {
        setTimeout(() => {
          (bodyRef.current as unknown as HTMLElement).scrollTop =
            firstChild?.clientHeight - lastPoint;
        }, 1);
      });
    }
  };

  useEffect(() => {
    const bRef = bodyRef?.current as HTMLElement;
    if ((bRef?.firstChild as HTMLElement).clientHeight <= bRef?.clientHeight) {
      loadMoreMessages().then(() => {
        setTimeout(() => {
          bRef.scrollTop = bRef.scrollHeight;
        }, 100);
      });
    }

    if (
      Math.round(bRef.scrollTop + bRef?.clientHeight) ==
      Math.round(
        (bRef?.firstChild as HTMLElement)?.clientHeight -
          (bRef.firstChild?.firstChild?.lastChild as HTMLElement)?.clientHeight
      )
    ) {
      bRef.scrollTop =
        (bRef?.firstChild as HTMLElement)?.clientHeight - bRef?.clientHeight;
    }
  }, [messages.length]);

  return (
    <div className="boxAllMessages" ref={bodyRef as any} onScroll={handleScroll}>
      <div>
        <div className="allMessages">
          {messages?.map((item: { sender: any; type: string, id: string }, key: any) => {
            if (item.sender != undefined || item.type === "style") {
              return (
                <Message
                  key={key + item.id}
                  message={item}
                  user={user}
                  deleteMessage={deleteMessage}
                  showToast={showToast}
                />
              );
            }
          })}
        </div>
      </div>
      {toast.show ? (
        <Toast text={toast.text} icon={toast.icon} color={toast.color} />
      ) : (
        <></>
      )}
    </div>
  );
};
