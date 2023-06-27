// <<---- Importações ---->> \\
import { useNavigate } from "react-router-dom";
import TextTypeMessage from "./MessageTypes/textTypeMessage.jsx";
import StyleTypeMessage from "./MessageTypes/styleTypeMessage.jsx";

export default ({ message, user, deleteMessage, showToast }: any) => {
  // |> Navegação entre páginas.
  const openpage = useNavigate();

  // |> Abertura de um perfil.
  const openProfile = (userID: string) => {
    openpage("/profile/" + userID);
  };

  switch (message.type) {
    case "text":
      return (
        <TextTypeMessage // Mensagem do tipo Texto.
          message={message}
          user={user}
          openProfile={openProfile}
          deleteMessage={deleteMessage}
          showToast={showToast}
        />
      );
    case "style":
      return (
        <>
          <StyleTypeMessage // Mensagem do tipo Estilo.
            message={message}
          />
        </>
      );
    default:
      return (
        <TextTypeMessage // Mensagem do tipo Texto.
          message={message}
          user={user}
          openProfile={openProfile}
          deleteMessage={deleteMessage}
          showToast={showToast}
        />
      );
  }
};
