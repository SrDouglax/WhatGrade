import "./Chats.scss";

// <<---- Importações ---->> \\
import { MdNavigateNext } from "react-icons/md";

import Header from "../../components/Header/Header";

interface calculatorType {
  name: string;
  tags: string[];
  link: string;
}

const chats: calculatorType[] = [
  {
    name: "Ciência da Computação",
    tags: ["Curso","Ciência", "Tecnologia"],
    link: "/chat/CncDCmptac",
  },
  {
    name: "Compartilhamento de Materiais",
    tags: ["Materiais", "Mídia", "Documentos"],
    link: "/chat/CmprtlhmntDMtrs",
  },
];

export default function Chats() {
  return (
    <div className="Calculators">
      <Header hasLink={true} backLink="/" showHelp={true} />
      <div className="content">
        <div className="about">
          <h2 className="title">Bate-papos</h2>
          <p className="text">
            Compartilhe informações e converse com pessoas sobre diversos tópicos.
          </p>
        </div>
        <div className="items">
          {chats.map((chat) => {
            return (
              <a className={`chat ${chat.name}`} key={chat.name} href={chat.link}>
                <div className="content">
                  <h2 className="name">{chat.name}</h2>
                  <div className="tags">
                    {chat.tags.sort().map((tag) => (
                      <p key={tag} className="tag">{tag}</p>
                    ))}
                  </div>
                </div>
                <div className="openlink">
                  <MdNavigateNext />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
