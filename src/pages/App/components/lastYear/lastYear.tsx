import { useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

import PossibleCourses from "../../../../components/PossibleCouses/PossibleCourses";
import { MdGpsFixed } from "react-icons/md";

import students23 from "../../../../data/years/21-23";
import students22 from "../../../../data/years/20-22";
import students21 from "../../../../data/years/19-21";

type Data = {
  [key: string]: { grade_1?: string; grade_2?: string };
};

export default function LastYear({ period }: { period: string }) {
  // Nome possivel, nota 1, nota 2, nota 3, meta
  const [userData, setUserData] = useState<any>(["", "", "", "", ""]);
  const [inputText, setInputText] = useState("");

  function setFirstGrade(array: string[]) {
    let data: Data = {};
    const regex = /^(\d+)\s+([\w\s'’]+\b)\s+([\d,]+)/; // Expressão regular para capturar o nome e a nota
    array.forEach((value: string) => {
      //console.log(value)
      const match = value.match(regex);
      if (match) {
        const name = match[2];
        const grade = match[3];
        data[name] = { grade_1: grade };
      }
    });
    console.log(data);

    return data;
  }

  function setSecondGrade(array: string[], previusData: any) {
    let data: Data = previusData;
    const regex = /^(\d+)\s+([\w\s'’]+\b)\s+([\d,]+)/; // Expressão regular para capturar o nome e a nota
    array.forEach((value: string) => {
      //console.log(value)
      const match = value.match(regex);
      if (match) {
        const name = match[2];
        const grade = match[3];
        data[name] = { grade_1: previusData[name]?.grade_1, grade_2: grade };
      }
    });
    return data;
  }

  const handleInputChange = useDebounce((e: any) => {
    loadCode().then((data: Data) => {
      let possibleName = Object.keys(data)
        .sort()
        .filter((chave) =>
          chave.indexOf(inputText.toUpperCase()) === 0
            ? chave.includes(inputText.toUpperCase())
            : false
        );
      if (possibleName.length < 1) {
        return;
      }
      let { grade_1, grade_2 } = data[possibleName[0]];
      let grd_1 = Number((grade_1 || "").replace(",", "."));
      let grd_2 = Number((grade_2 || "").replace(",", "."));
      let grade = calculateGrade(grd_1, grd_2, userData[4])?.toFixed(3) || "";
      grade = Number(grade) < 0 ? "" : Number(grade) > 1000 ? "> 1000" : grade;
      if (possibleName[0] !== userData?.[0]) {
        if (inputText.length > 0) {
          setUserData((e: any) => [possibleName[0], grd_1, grd_2, grade, e[4]]);
        } else {
          setUserData((e: any) => ["", "", "", "", e[4]]);
        }
      }
    });
  }, 500);

  async function loadCode() {
    let lines_ssa1: string[] = [];
    let lines_ssa2: string[] = [];
    let data_ssa = {};

    // await fetch(`./data/years/${period[0]}-${period[1]}/ssa1.txt`)
    //   .then(response => response.text())
    //   .then(minhaString => lines_ssa1 = minhaString.split("\n").map((data) => data.replace('\r', '')));
    // await fetch(`./data/years/${period[0]}-${period[1]}/ssa2.txt`)
    //   .then(response => response.text())
    //   .then(minhaString => lines_ssa2 = minhaString.split("\n").map((data) => data.replace('\r', '')));

    // console.log('loading...')

    switch (period) {
      case "21-23":
        data_ssa = students23;
        break;
      case "20-22":
        data_ssa = students22;

        break;
      case "19-21":
        data_ssa = students21;

        break;
      default:
        break;
    }
    return data_ssa;
  }

  function calculateGrade(
    grade1: number,
    grade2: number,
    expectedGrade: number
  ) {
    return expectedGrade !== 0
      ? -((grade1 * 3 + grade2 * 3 - expectedGrade * 10) / 4)
      : undefined;
  }

  useEffect(() => {
    handleInputChange();
  }, [inputText]);

  const handleOnChangeGoal = useDebounce((e: any, isNumber?: boolean) => {
    let goal = isNumber ? e : Number(e.target.value);

    (document.getElementById("grade3") as HTMLDivElement).setAttribute(
      "style",
      ""
    );
    setTimeout(() => {
      (document.getElementById("grade3") as HTMLDivElement).setAttribute(
        "style",
        "animation: shines 500ms ease forwards;"
      );
    }, 1);

    setUserData((oldUser: any) => {
      const grade = Number(
        (calculateGrade(oldUser[1], oldUser[2], goal) || -1).toFixed(3)
      );
      if (inputText.length === 0) return oldUser;
      const updatedUser = [...oldUser]; // cria uma cópia do array do estado atual

      updatedUser[3] = grade < 0 ? "< 0" : grade > 1000 ? "> 1000" : grade; // atualiza o terceiro item do array com o novo valor
      updatedUser[4] = goal;

      return updatedUser; // retorna o array atualizado para ser definido como o novo estado
    });
  }, 500);

  return (
    <>
      <h1 className="title">
        SSA <span> GRADES</span>
      </h1>
      <h2 className="subtitle">
        {`20${period.split("-")[0]} - 20${period.split("-")[1]}`}
      </h2>
      <p className="name">{userData?.[0]}</p>
      <input
        type="text"
        className="input"
        placeholder="Digite seu nome"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <div className="grades">
        <p
          className={
            "grade grade1 " + (userData?.[1] === "" ? "placeholder" : "")
          }
        >
          {userData?.[1].toString().replace(".", ",") || "SSA1"}
        </p>
        <p
          className={
            "grade grade2 " + (userData?.[2] === "" ? "placeholder" : "")
          }
        >
          {userData?.[2].toString().replace(".", ",") || "SSA2"}
        </p>
        <p
          className={
            "grade grade3 " + (userData?.[3] === "" ? "placeholder" : "")
          }
          id="grade3"
        >
          {userData?.[3].toString().replace(".", ",") || "SSA3"}
        </p>

        <p>Nota SSA1</p>
        <p>Nota SSA2</p>
        <p>Nota SSA3</p>
      </div>
      <div className="goal">
        <input
          type="number"
          className="grade finalgrade"
          placeholder={"Sua meta"}
          onChange={handleOnChangeGoal as React.ChangeEventHandler}
        />
        <div className="inline">
          <p>Nota Final</p>
          <a href="https://processodeingresso.upe.pe.gov.br/" target="_blank">
            Site Oficial
          </a>
        </div>
      </div>
      <p className="setGoalHint">
        Clique em{" "}
        <span>
          <MdGpsFixed />
        </span>{" "}
        para definir como meta!
      </p>
      <PossibleCourses goal={userData[4]} setGoal={handleOnChangeGoal} />
    </>
  );
}
