"use client";
import { useState, useEffect } from "react";
import "./styles.scss";

import { firebaseAuth, firestore } from "../../../services/firebase";
import ChatContent from "./components/ChatContent/ChatContent";
import { QueryDocumentSnapshot } from "firebase/firestore";
import {
  GlobalUser,
  UserMessageObject,
} from "../../../services/firebase-interfaces";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";

interface chatType {
  name: string;
  tags: string[];
  link: string;
}

export default function ChatChannel ({params}:{params : {channelID: string}}) {
  let chats: chatType[] = [
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
      tags: [
        "Filosofia",
        "Ética",
        "Lógica",
        "Política",
        "Filósofos",
        "Pensamento Crítico",
      ],
      link: "/chat/Flsf",
    },
  ];
  const [user, setUser] = useState<GlobalUser>();
  const [dbUnsubNew, setDbUnsubNew] = useState<Function>(() => {});
  const [dbUnsubAll] = useState<Function>(() => {});
  const [allMessages, setAllMessages] = useState<UserMessageObject[]>([]);
  const [firstMessagesLoaded, setFirstMessagesLoaded] = useState<boolean>(false);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot>();

  const navigate = useRouter();

  const allowedIDs = [
    "CncDCmptc",
    "CmprtlhmntDMtrl",
    "Chtdvdsdsscs",
    "RdcLtrtr",
    "Extstcnlg",
    "HstrGrl",
    "LngsEstrngrs",
    "Ggrf",
    "Blg",
    "Flsf",
  ];
  if (!allowedIDs.includes(params.channelID || "")) {
    navigate.push("/chat");
  }

  useEffect(() => {
    firebaseAuth.getUser().then(({ hasUser, user }) => {
      if (hasUser) {
        setUser(user);
      }
    });

    firestore.getMessagesFromChannel(params.channelID || "", setAllMessages).then((e) => {
      setLastVisible(e.lastVisible);
      setFirstMessagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (firstMessagesLoaded) {
      firestore.onChangesInChannel(
        params.channelID || "",
        allMessages,
        setAllMessages,
        dbUnsubNew,
        setDbUnsubNew,
        dbUnsubAll
      );
    }
  }, [allMessages]);

  return (
    <>
      <Header />
      <h1 className="chatName text-gray-200 font-bold text-xl w-full pt-2 pb-2 text-center">{`${
        chats.find((e) => {
          return e.link.slice(6) === params.channelID;
        })?.name
      }`}</h1>
      <ChatContent
        user={user as GlobalUser}
        channelID={params.channelID || ""}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
        lastVisible={lastVisible}
        setLastVisible={setLastVisible}
      />
    </>
  );
};
