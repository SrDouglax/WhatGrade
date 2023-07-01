"use client";
import Header from "../../../components/Header/Header"
import FindGrade from "./components/findGrade/findGrade"
import "./styles.scss";

export default function CalcSSA() {
  const period = '21-23'

  return (
    <div className="App">
      <Header hasLink={true} />
      <div className="Content">
        <FindGrade period={period as string} />
      </div>
      <div className="BottomDegrade"></div>
    </div>
  );
}
