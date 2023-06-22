import "./Novelty.scss";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { firestore } from "../../services/firebase";

export default function Novelty() {
  const [sendingState, setSenddingState] = useState("default");
  function sendSuggestion() {
    if (sendingState == "default") {
      setSenddingState("sending");
      const sender = (document.querySelector(".name") as HTMLInputElement).value;
      const suggestion = (document.querySelector(".suggestion") as HTMLTextAreaElement)
        .value;
      const date = new Date();
      firestore.addSuggestion({ sender, suggestion, date }).finally(() => {
        setSenddingState("sent");
      });
    } else if (sendingState == "sent") {
      setSenddingState("default");
    }
  }
  return (
    <div className="Novelty">
      <Header hasLink={true} backLink="/" showHelp={true} />
      <div className="content">
        <div className="survey">
          <h2 className="title">O que deseja sugerir?</h2>
          <input
            type="text"
            className={`name ${sendingState == "sent" ? "low" : ""}`}
            placeholder="Seu nome"
            maxLength={32}
            disabled={sendingState == "sent"}
          />
          <textarea
            className={`suggestion ${sendingState == "sent" ? "low" : ""}`}
            placeholder="Algo que gostaria de ver no site"
            maxLength={7500}
            disabled={sendingState == "sent"}
          ></textarea>
        </div>
        <div className="buttons">
          <div
            className={`send ${
              sendingState == "sending" ? "sending" : sendingState == "sent" ? "sent" : ""
            }`}
            onClick={sendSuggestion}
          >
            {sendingState == "sending" ? <div className="loading"> </div> : ""}
            <p className="text">
              {sendingState == "sending"
                ? "Enviando"
                : sendingState == "sent"
                ? "Enviar outra"
                : "Enviar"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
