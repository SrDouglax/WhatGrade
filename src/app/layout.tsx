import Header from "@/components/Header/Header";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookshelf",
  description: "Ferramentas para ajudar você que está se preparando para o SSA ou ENEM",
  publisher: "Jiant Studios",
  keywords: [
    "bookshelf",
    "vestibulando",
    "calculadora",
    "chat",
    "bate-papo",
    "calendário",
    "vestibular",
    "pernambuco",
    "brasil",
    "upe",
    "universidade",
    "ssa1",
    "ssa2",
    "ssa3",
    "descobrir",
    "sistema seriado de avaliação",
    "prova",
    "enem",
    "nota",
    "2021",
    "2022",
    "2023",
    "2024",
  ],
  openGraph: {
    title: "Bookshelf",
    description: "A plataforma ideal para quem está se preparando para um vestibular!",
    url: "https://bookshelf-net.vercel.app",
    images: [
      {
        url: "https://bookshelf-net.vercel.app/images/og.png",
        width: 890,
        height: 890,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " flex flex-col"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
