import { useEffect, useRef, useState } from "react";
import moment from "moment";
import "moment/dist/locale/pt-br";
import "./textTypeMessage.scss";
import { FaCopy, FaReply, FaTrashAlt } from "react-icons/fa";
import Linkify from "linkify-react";
import { MdCopyAll } from "react-icons/md";

moment.locale("pt-br");

export default ({ message, user, openProfile, deleteMessage, showToast }: any) => {
  const [showContext, setShowContext] = useState(false);
  const [contextPos, setContextPos] = useState([0, 0]);

  const boxRef = useRef<HTMLElement>();
  const contextRef = useRef<HTMLElement>();

  const copyMessage = (t: string) => {
    navigator.clipboard.writeText(t).then(() => {
      showToast("Texto copiado!", <MdCopyAll />, "#60ff50");
    });
  };

  // ◈ Opçõkes do menu.
  const options = [
    // {
    //   class: "reply",
    //   text: "Responder",
    //   icon: () => {
    //     return <FaReply />;
    //   },
    // },
    {
      class: "copy",
      text: "Copiar mensagem",
      icon: () => {
        return <FaCopy />;
      },
    },
    {
      class: "delete",
      text: "Deletar",
      icon: () => {
        return <FaTrashAlt />;
      },
    },
  ];

  const delMsg = () => {
    const msgbox = boxRef.current;
    const senderId = message.sender?.id;

    const readerId = user?.uid;
    // console.log(user);
    console.log(readerId, senderId, msgbox);

    if (readerId === senderId) {
      deleteMessage(msgbox?.id);
      showToast("Mensagem deletada!", <MdCopyAll />, "#ff3250");
    }
  };

  const hasParentWithClass = (element: any, className: string) => {
    let currentNode = element.parentNode;

    while (currentNode && currentNode !== document) {
      if (currentNode.classList && currentNode.classList.contains(className)) {
        return true;
      }
      currentNode = currentNode.parentNode;
    }

    return false;
  };
  const hasParentWithId = (element: any) => {
    let currentNode = element.parentNode;

    while (currentNode && currentNode !== document) {
      if (currentNode.id == message.id.toString()) {
        return true;
      }
      currentNode = currentNode.parentNode;
    }

    return false;
  };
  const handleClick = (e: MouseEvent) => {
    // If click on button and is the message with the correct id
    const checkElement = (className: string) => {
      return (
        ((e.target as HTMLElement).classList.contains(className) ||
          hasParentWithClass(e.target as HTMLElement, className)) &&
        hasParentWithId(e.target as HTMLElement)
      );
    };

    if (checkElement("delete")) {
      delMsg();
    } else if (checkElement("copy")) {
      copyMessage(message.text);
      setShowContext(false);
    } else {
      setShowContext(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleMessageContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    setShowContext(true);
    setTimeout(() => {
      const x =
        e.clientX > (boxRef.current?.clientWidth || 0) - e.clientX
          ? e.clientX - (contextRef.current?.clientWidth || 0)
          : e.clientX;
      const y = e.clientY;
      setContextPos([x, y]);
    }, 0);
  };

  return (
    <>
      <div
        className={`message box`}
        id={message.id.toString()}
        data-senderid={message.sender.uid}
        data-readerid={user?.id}
        ref={boxRef as any}
        onContextMenu={handleMessageContextMenu as any}
      >
        <div className="senderPicture">
          <img
            src={
              message.sender.profilePicture != ""
                ? message.sender.profilePicture.toString()
                : "https://firebasestorage.googleapis.com/v0/b/brase-indev.appspot.com/o/profilePictures%2Fdefault.jpeg?alt=media&token=74a37c10-c39d-483b-a129-9084e2e255e7"
            }
            draggable="false"
          />
        </div>
        <div className="contentText">
          <span className="message header">
            <p
              className="message username"
              onClick={(e) => {
                e.preventDefault();
                openProfile(message.sender.id);
              }}
            >
              {message.sender.name}
            </p>
            <p className="message sendDate">
              {moment(message.timestamp.toDate()).calendar()}
            </p>
          </span>
          <div className={`text`}>
            <Linkify>{message.text}</Linkify>
          </div>
        </div>
        <div
          ref={contextRef as any}
          className="messageContextMenu"
          style={{
            display: showContext ? "" : "none",
            left: `${contextPos[0]}px`,
            // right: contextPos[0] < 0 ? `${-contextPos[0]}px` : "",
            top: `${contextPos[1]}px`,
          }}
        >
          <ul>
            {options.map((option) => (
              <li className={`${option.class}`} key={option.class}>
                <p>{option.text}</p>
                <span>{option.icon()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
