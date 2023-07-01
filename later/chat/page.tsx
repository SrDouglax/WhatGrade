"use client";

// <<---- Importações ---->> \\
import { MdNavigateNext } from "react-icons/md";
import Header from "../../components/Header/Header";
import "./styles.scss";


interface chatType {
  name: string;
  tags: string[];
  link: string;
}

export const chats: chatType[] = [
  {
    name: "Ciência da Computação",
    tags: [
      "Ciência",
      "Tecnologia",
      "Computação",
      "Programação",
      "Algoritmos",
      "Inteligência Artificial",
      "Sistemas Operacionais",
      "Redes de Computadores",
      "Banco de Dados",
      "Segurança da Informação",
    ],
    link: "/chat/CncDCmptc",
  },
  {
    name: "Compartilhamento de Materiais",
    tags: [
      "Materiais",
      "Mídia",
      "Documentos",
      "Livros",
      "Apostilas",
      "Vídeos",
      "Slides",
      "Apresentações",
      "Bibliografias",
      "Artigos",
    ],
    link: "/chat/CmprtlhmntDMtrl",
  },
  {
    name: "Chat de dúvidas e discussões",
    tags: [
      "Dúvidas",
      "Discussões",
      "Perguntas",
      "Respostas",
      "Troca de Ideias",
      "Esclarecimentos",
      "Sugestões",
      "Debates",
      "Ajuda Mútua",
      "Compartilhamento de Conhecimento",
    ],
    link: "/chat/Chtdvdsdsscs",
  },
  {
    name: "Redação e Literatura",
    tags: [
      "Redação",
      "Literatura",
      "Português",
      "Escrita",
      "Análise de Texto",
      "Gramática",
      "Estilos Literários",
    ],
    link: "/chat/RdcLtrtr",
  },
  {
    name: "Exatas e Tecnologia",
    tags: [
      "Matemática",
      "Programação",
      "Tecnologia",
      "Cálculo",
      "Álgebra",
      "Geometria",
      "Estatística",
      "Física",
      "Química",
      "Engenharia",
    ],
    link: "/chat/Extstcnlg",
  },
  {
    name: "História Geral",
    tags: [
      "História",
      "Civilizações Antigas",
      "Revoluções",
      "Colonização",
      "Globalização",
      "Movimentos Sociais",
    ],
    link: "/chat/HstrGrl",
  },
  {
    name: "Línguas Estrangeiras",
    tags: [
      "Inglês",
      "Espanhol",
      "Francês",
      "Alemão",
      "Italiano",
      "Japonês",
      "Chinês",
      "Russo",
      "Árabe",
      "Coreano",
    ],
    link: "/chat/LngsEstrngrs",
  },
  {
    name: "Geografia",
    tags: [
      "Geografia",
      "Desenvolvimento Sustentável",
      "Globalização",
      "Geopolítica",
      "Urbanização",
    ],
    link: "/chat/Ggrf",
  },
  {
    name: "Biologia",
    tags: [
      "Biologia",
      "Genética",
      "Ecologia",
      "Anatomia",
      "Fisiologia",
      "Evolução",
      "Biodiversidade",
      "Microbiologia",
      "Botânica",
    ],
    link: "/chat/Blg",
  },
  {
    name: "Filosofia",
    tags: ["Filosofia", "Ética", "Lógica", "Política", "Filósofos", "Pensamento Crítico"],
    link: "/chat/Flsf",
  }
];

export default function Chats() {
  return (
    <div className="Chats">
      <Header hasLink={true} />
      <div className="content">
        <div className="about">
          <h2 className="title">Bate-papos</h2>
          <p className="text">
            Compartilhe informações e converse com pessoas sobre diversos tópicos.
          </p>
        </div>
        <div className="items">
          {chats
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((chat) => {
              return (
                <a className={`chat ${chat.name}`} key={chat.name} href={chat.link}>
                  <div className="content">
                    <h2 className="name">{chat.name}</h2>
                    <div className="tags">
                      {chat.tags
                        .sort(() => Math.random() - 0.5)
                        .map((tag) => (
                          <p key={tag} className="tag">
                            {tag}
                          </p>
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
