import { Metadata } from "next";

interface exemptedListType {
  [key: string]: { title: string; url: string }[];
}

export const metadata: Metadata = {
  description: "Lista dos  resultados de isenção do SSA em 2023",
  keywords: ["isenção", "resuultado", "deferida", "não foi", '2022', '2023'],
};

export default function Exeptions() {
  const years: exemptedListType = {
    "2023": [
      {
        title: "Isentos SSA1",
        url: "/isencoes/2023/ssa1",
      },
      {
        title: "Isentos SSA2",
        url: "/isencoes/2023/ssa2",
      },
      {
        title: "Isentos SSA3",
        url: "/isencoes/2023/ssa3",
      },
      {
        title: "Isentos SSA1 (Recurso)",
        url: "/isencoes/2023/ssa1r",
      },
      {
        title: "Isentos SSA2 (Recurso)",
        url: "/isencoes/2023/ssa2r",
      },
      {
        title: "Isentos SSA3 (Recurso)",
        url: "/isencoes/2023/ssa3r",
      },
    ],
  };
  
  return (
    <div className="Exeptions">
      <div className="content p-4">
        <h2 className="title text-white text-xl font-bold mb-4">
          Resultados de Isenções
        </h2>
        <div className="years bg-gray-900 pb-4 rounded-md">
          {Object.keys(years).map((year, i) => {
            return (
              <div className="year" key={i}>
                <h2 className="yearTitle text-white font-md px-4 py-2 mb-2 rounded-md bg-gray-300">
                  Ano de {year}
                </h2>
                <div className="links flex flex-col gap-1">
                  {Object.values(years)[i].map((yearData, i) => (
                    <a
                      className={`calculator text-sky-400 ml-5 underline ${yearData.title}`}
                      href={yearData.url}
                      key={i}>
                      {yearData.title}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
