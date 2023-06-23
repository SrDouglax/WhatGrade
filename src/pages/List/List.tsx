import { useState } from "react";
import "./List.scss";
import Header from "../../components/Header/Header";

import { Link } from "react-router-dom";
import GoToSurvey from "../../components/GoToSurvey/GoToSurvey";

export const allPeriods = [
  { period: "21-23", desc: "Notas SSA1, SSA2 e necessária no SSA3", lastYear: true },
  { period: "20-22", desc: "Descubra se você passaria em algum curso." },
  { period: "19-21", desc: "Descubra se você passaria em algum curso" },
];

export default function List() {
  const [periods, setPeriods] = useState(allPeriods);

  return (
    <div className="App">
      <Header hasLink={false} showHelp={true} />
      <div className="ContentList">
        {periods.map((period, index) => {
          return (
            <Link
              to={`/p/${period.period}`}
              key={index}
              className="Period"
              style={{ animation: `in ${1000 + index * 100}ms ease forwards` }}
            >
              <h2>
                SSA entre 20{period.period.split("-")[0]} e 20
                {period.period.split("-")[1]}
              </h2>
              <p>{period.desc}</p>
            </Link>
          );
        })}
      </div>
      <GoToSurvey />
    </div>
  );
}
