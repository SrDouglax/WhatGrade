// <<---- Importações ---->> \\
import TextTypeMessage from "./MessageTypes/textTypeMessage";
import StyleTypeMessage from "./MessageTypes/styleTypeMessage";
import { useRouter } from "next/navigation.js";

export default ({ message, user, deleteMessage, showToast }: any) => {
  // |> Navegação entre páginas.
  const openpage = useRouter();

  // |> Abertura de um perfil.
  const openProfile = (userID: string) => {
    openpage.push("/profile/" + userID);
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
