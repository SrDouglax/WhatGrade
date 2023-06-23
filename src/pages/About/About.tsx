import "./About.scss";
import Header from "../../components/Header/Header";

import img01 from "../../assets/about/01.png";

export default function About() {
  return (
    <div className="About">
      <Header hasLink={true} backLink="/help" showHelp={true} />
      <div className="aboutContent">
        <h1 className="title">
          What <span>Grade</span>
        </h1>
        <p className="aboutText">
          Este site é um projeto individual, criado por Marcos Douglas, estudante da EREM
          Padre Guedes, e tem como objetivo ajudar os participantes do Sistema Seriado de
          Avaliação (SSA) a descobrir a nota necessária para ingressar no curso desejado.
        </p>
        <img src={img01} alt="printscreen" className="print" />
        <a href="/">Acessar o site</a>
      </div>
    </div>
  );
}
