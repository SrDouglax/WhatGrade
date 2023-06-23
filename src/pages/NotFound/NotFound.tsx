import { MdReportGmailerrorred } from "react-icons/md";
import "./NotFound.scss";

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
