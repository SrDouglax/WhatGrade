import { MouseEventHandler, useEffect, useRef, useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import "./textTypeMessage.scss";
import { FaCopy, FaReply, FaTrashAlt } from "react-icons/fa";

export default ({ message, user, openProfile, deleteMessage }: any) => {
  // console.log(user);
  
  const [showContext, setShowContext] = useState(false);
  const [contextPos, setContextPos] = useState([0, 0]);

  // |> Definir linguagem da data de envio da mensagem.
  moment.locale("pt-br");

  // |> Referência ao objeto da mensagem.
  const boxRef = useRef<HTMLElement>();
  const contextRef = useRef<HTMLElement>();

  // |> Cópia do conteúdo de uma mensagem.
  const copyMessage = (t: string) => {
    navigator.clipboard.writeText(t);
  };

  // ◈ Opções do menu.
  const options = [
    {
      class: "reply",
      text: "Responder",
      icon: () => {
        return <FaReply />;
      },
      action: () => {},
    },
    {
      class: "copy",
      text: "Copiar mensagem",
      icon: () => {
        return <FaCopy />;
      },
      action: () => {
        copyMessage((boxRef.current?.children[1].children[1] as HTMLElement).innerText);
      },
    },
    {
      class: "delete",
      text: "Deletar",
      icon: () => {
        return <FaTrashAlt />;
      },
      action: () => {},
    },
  ];

  // |> Deleta uma mensagem.
  const delMsg = () => {
    const msgbox = boxRef.current;
    const senderId = message.sender?.id;
    
    const readerId = user?.uid;
    // console.log(user);
    console.log(readerId, senderId, msgbox);

    if (readerId === senderId) {
      deleteMessage(msgbox?.id);
    }
  };

  const hasParentWithClassRemove = (element: any) => {
    let currentNode = element.parentNode;

    while (currentNode && currentNode !== document) {
      if (currentNode.classList && currentNode.classList.contains("delete")) {
        return true;
      }

      currentNode = currentNode.parentNode;
    }

    return false;
  };
  const handleClick = (e: MouseEvent) => {
    // console.log(
    //   (e.target as HTMLElement).classList,(e.target as HTMLElement).classList.contains('delete'), 
    //   hasParentWithClassRemove(e.target as HTMLElement)
    // );
    
    if ((e.target as HTMLElement).classList.contains('delete') || hasParentWithClassRemove(e.target as HTMLElement)) {
      // delMsg();
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
    setShowContext(true);
    e.preventDefault();

    const x =
      e.clientX > (boxRef.current?.clientWidth || 0) - e.clientX
        ? e.clientX - (contextRef.current?.clientWidth || 0)
        : e.clientX;
    const y = e.clientY;
    setContextPos([x, y]);
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
            <p>{message.text}</p>
          </div>
        </div>
        <div
          className="messageContextMenu"
          style={{
            display: showContext ? "" : "none",
            left: `${contextPos[0]}px`,
            top: `${contextPos[1]}px`,
          }}
          ref={contextRef as any}
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
