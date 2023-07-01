// <<---- Importações ---->> \\
import Header from "../../../components/Header/Header";
import App from "./app/App";
import "./Chat.scss";

export default function Chat() {
  return (
    <div className="Chat">
      <Header hasLink={true} backLink="/" showHelp={true} />
      <div className="content">
        <App />
      </div>
    </div>
  );
}
