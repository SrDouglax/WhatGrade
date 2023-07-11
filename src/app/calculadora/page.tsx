import { Metadata } from "next";
import "./styles.scss";
import { MdNavigateNext } from "react-icons/md";
import Header from "@/components/Header/Header";

interface calculatorType {
  name: string;
  description: string;
  link: string;
}

export const metadata: Metadata = {
  description:
    "Calcule quanto você precisa tirar no SSA3 para entrar no curso dos sonhos.",
  keywords: [
    "calcular nota ssa",
    "calculadora ssa",
    "calculadora",
    "ssa",
    "vestibar",
    "pernambuco",
    "Brasil",
    "2023",
    "processodeingresso",
  ],
};

const calculators: calculatorType[] = [
  {
    name: "Sistema Seriado de Avalaliação (SSA)",
    description:
      "Calcule quanto você precisa tirar no SSA3 e veja os cursos disponíveis em 2023. - UPE",
    link: "/calculadora/ssa",
  },
];

export default function Calculators() {
  return (
    <div className="Calculators">
      <Header />
      <div className="content">
        <div className="about">
          <h2 className="title">Calculadoras</h2>
          <p className="text">
            Tem como principal proposito permitir o cálculo de notas dos vestibulares de
            forma fácil.
          </p>
        </div>
        <div className="items">
          {calculators.map((calculator, i) => {
            return (
              <a
                className={`calculator ${calculator.name}`}
                href={calculator.link}
                key={i}>
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
