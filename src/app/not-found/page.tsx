'use client'
import { MdReportGmailerrorred } from "react-icons/md";
import "./styles.scss";

export default function NotFound() {
  return (
    <div className="NotFound">
      <MdReportGmailerrorred className="Icon" />
      <p className="Text">Página não encontrada...</p>
      <a href="/" className="mainPage">
        Voltar para a página principal
      </a>
    </div>
  );
}
