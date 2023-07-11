import Header from "@/components/Header/Header";
import "./styles.scss";

export default function List() {
  const periods = [
    { period: "21-23", desc: "Notas SSA1, SSA2 e necessária no SSA3", lastYear: true },
    { period: "20-22", desc: "Descubra se você passaria em algum curso." },
    { period: "19-21", desc: "Descubra se você passaria em algum curso" },
  ];
  return (
    <div className="App">
      <Header />
      <div className="ContentList">
        {periods.map((period, index) => {
          return (
            <a
              href={`/calculadora/ssa/${period.period}`}
              key={index}
              className="Period"
              style={{ animation: `in ${1000 + index * 100}ms ease forwards` }}>
              <h2 className="font-bold">
                SSA entre 20{period.period.split("-")[0]} e 20
                {period.period.split("-")[1]}
              </h2>
              <p>{period.desc}</p>
            </a>
          );
        })}
      </div>
      {/* <GoToSurvey /> */}
    </div>
  );
}
