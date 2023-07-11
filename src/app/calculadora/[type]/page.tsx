"use client";
import FindGrade from "./components/findGrade/findGrade"
import "./styles.scss";

export default function CalcSSA() {
  const period = '21-23'

  return (
    <div className="App overflow-hidden">
      <div className="Content">
        <FindGrade period={period as string} />
      </div>
      <div className="BottomDegrade"></div>
    </div>
  );
}
