import { lazy, useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";

const PossibleCourses = lazy(
  () => import("../../../../components/PossibleCouses/PossibleCourses")
);

type Data = {
  [key: string]: { grade_1?: string; grade_2?: string };
};

export default function findGrade({ period }: { period: string }) {
  // Nome possivel, nota 1, nota 2, nota 3, meta
  const [userData, setUserData] = useState<any>(["", "", "", "", ""]);
  const data = useRef<Data>({});
  const inputText = useRef<string>("");

  useEffect(() => {
    loadCode().then((d) => {
      data.current = d as Data;
    });
  }, []);

  const handleInputChange = useDebounce((e: any) => {
    const iText = inputText.current
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let possibleName = Object.keys(data.current)
      .sort()
      .filter((chave) => (chave.indexOf(iText) === 0 ? chave.includes(iText) : false));
    if (possibleName.length < 1) {
      return;
    }
    let { grade_1, grade_2 } = data.current[possibleName[0]];
    let grd_1 = Number((grade_1 || "").replace(",", "."));
    let grd_2 = Number((grade_2 || "").replace(",", "."));
    let grade = calculateGrade(grd_1, grd_2, userData[4])?.toFixed(3) || "";
    grade = Number(grade) < 0 ? "" : Number(grade) > 1000 ? "> 1000" : grade;
    if (possibleName[0] !== userData?.[0]) {
      if (inputText.current.length > 0) {
        setUserData((e: any) => [possibleName[0], grd_1, grd_2, grade, e[4]]);
      } else if (userData[0] !== "") {
        setUserData((e: any) => ["", "", "", "", e[4]]);
      }
    }
  }, 500);

  async function loadCode() {
    let studentsData: Data = {};
    if (period === "21-23") {
      studentsData = (await import("../../../../data/years/21-23")) as Data;
    } else if (period === "20-22") {
      studentsData = (await import("../../../../data/years/20-22")) as Data;
    } else if (period === "19-21") {
      studentsData = (await import("../../../../data/years/19-21")) as Data;
    }

    return studentsData.default;
  }

  function calculateGrade(grade1: number, grade2: number, expectedGrade: number) {
    return expectedGrade !== 0
      ? -((grade1 * 3 + grade2 * 3 - expectedGrade * 10) / 4)
      : undefined;
  }

  const handleOnChangeGoal = useCallback(
    useDebounce((e: any, isNumber?: boolean) => {
      let goal = isNumber ? e : Number(e.target.value);

      if (inputText.current) {
        (document.getElementById("grade3") as HTMLDivElement).setAttribute("style", "");
        setTimeout(() => {
          (document.getElementById("grade3") as HTMLDivElement).setAttribute(
            "style",
            "animation: shines 500ms ease forwards;"
          );
        }, 1);
      }

      setUserData((oldUser: any) => {
        const grade = Number(
          (calculateGrade(oldUser[1], oldUser[2], goal) || -1).toFixed(3)
        );
        if (inputText.current.length === 0) return oldUser;
        const updatedUser = [...oldUser]; // cria uma cópia do array do estado atual

        updatedUser[3] = grade < 0 ? "< 0" : grade > 1000 ? "> 1000" : grade; // atualiza o terceiro item do array com o novo valor
        updatedUser[4] = goal;

        return updatedUser; // retorna o array atualizado para ser definido como o novo estado
      });
    }, 500),
    []
  );

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
          inputText.current = e.target.value;
          handleInputChange();
        }}
      />
      <div className="grades">
        <p className={"grade grade1 " + (userData?.[1] === "" ? "placeholder" : "")}>
          {userData?.[1].toString().replace(".", ",") || "SSA1"}
        </p>
        <p className={"grade grade2 " + (userData?.[2] === "" ? "placeholder" : "")}>
          {userData?.[2].toString().replace(".", ",") || "SSA2"}
        </p>
        <p
          className={"grade grade3 " + (userData?.[3] === "" ? "placeholder" : "")}
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
          <a href="/pdfs/Listao_SSA3_2023.pdf" target="_blank">
            Dados (SSA 2023)
          </a>
        </div>
      </div>
      <p className="setGoalHint">Clique no nome do curso para definir como meta!</p>
      <PossibleCourses goal={userData[4]} setGoal={handleOnChangeGoal} period={period} />
    </>
  );
}
