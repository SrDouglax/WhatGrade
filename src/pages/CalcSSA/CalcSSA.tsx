import { lazy } from "react";
import { useParams } from "react-router-dom";
import { MdWarningAmber } from "react-icons/md";

import "./CalcSSA.scss";

const Header = lazy(() => import("../../components/Header/Header"));
const FindGrade = lazy(() => import("./components/findGrade/findGrade"));

import { allPeriods } from "../List/List";
import whatsapp from "/images/whatsapp.webp";

export default function CalcSSA() {
  const period = '21-23';

  const invalidPeriod = allPeriods.every((pd) => pd.period !== period);
  if (invalidPeriod) {
    return (
      <div className="InvalidPeriod">
        <MdWarningAmber className="Icon" />
        <p className="Text">Algo parece errado... As datas não batem...</p>
      </div>
    );
  }

  const lastYear = allPeriods.filter((pd) => pd.period === period)[0].lastYear;

  return (
    <div className="App">
      <Header hasLink={true} backLink="/" showHelp={true} />
      <div className="Content">
        <FindGrade period={period as string} />
      </div>
      <p id="by">
        {" "}
        By: Douglas
        <a href="https://wa.me/5581996405552">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </p>
      <div className="BottomDegrade"></div>
    </div>
  );
}
