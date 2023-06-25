import "./Calculators.scss";
import Header from "../../components/Header/Header";
import { MdNavigateNext } from "react-icons/md";

interface calculatorType {
  name: string;
  description: string;
  link: string;
}

const calculators: calculatorType[] = [
  {
    name: "Sistema Seriado de Avalaliação (SSA)",
    description:
      "Calcule quanto você precisa tirar no SSA3 e veja os cursos disponíveis em 2023. - UPE",
    link: "/c/ssa",
  },
];

export default function Calculators() {
  return (
    <div className="Calculators">
      <Header hasLink={true} backLink="/" showHelp={true} />
      <div className="content">
        <div className="about">
          <h2 className="title">Calculadoras</h2>
          <p className="text">
            Tem como principal proposito permitir o cálculo de notas dos vestibulares de
            forma fácil.
          </p>
        </div>
        <div className="items">
          {calculators.map((calculator) => {
            return (
              <a className="calculator" href={calculator.link}>
                <div className="content">
                  <h2 className="name">{calculator.name}</h2>
                  <p className="description">{calculator.description}</p>
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
