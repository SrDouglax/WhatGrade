import y2020 from "./2020";
import y2021 from "./2021";
import y2022 from "./2022";
import y2023 from "./2023";

type CutGrade = [string, number, number];
type Vacancy = [string, number, number, number];

type Data = {
  [campusName: string]: {
    [courseName: string]: {
      cutGrades: CutGrade[];
      vacancies: Vacancy[];
    };
  };
};

const GenData = () => {
  const years = [
    ["2022", y2023],
    ["2021", y2022],
    ["2020", y2021],
    ["2019", y2020],
  ];

  const data: Data = {};

  years.forEach(([year, text]) => {
    const pages = text
      .split(`SISTEMA SERIADO DE AVALIAÇÃO 3 - SSA3\nCLASSIFICADOS`)
      .slice(1);

    pages.forEach((page) => {
      const lines = page.split("\n");
      const campus = lines[1]?.slice(8);
      const course = lines[2]?.slice(7).split(" - ")[0];

      const cutGrade: CutGrade = [year, -1, -1];
      const vacancy: Vacancy = [year, 0, 0, 0];

      lines.slice(5).forEach((line) => {
        const columns = line.split(" ");
        if (columns.length >= 6) {
          const score = parseFloat(columns[columns.length - 3]);
          const category = columns[columns.length - 1];
          if (!isNaN(score)) {
            if (category === "NÃO") {
              vacancy[1]++;
              if (cutGrade[1] === -1 || score < cutGrade[1]) {
                cutGrade[1] = score;
              }
            } else if (category === "A1") {
              vacancy[2]++;
              if (cutGrade[2] === -1 || score < cutGrade[2]) {
                cutGrade[2] = score;
              }
            } else if (category === "A2") {
              vacancy[3]++;
              if (cutGrade[2] === -1 || score < cutGrade[2]) {
                cutGrade[2] = score;
              }
            } else if (category === "SIM") {
              vacancy[2]++;
              vacancy[3]++;
              if (cutGrade[2] === -1 || score < cutGrade[2]) {
                cutGrade[2] = score;
              }
            }
          }
        }
      });

      if (!data[campus]) {
        data[campus] = {};
      }

      if (!data[campus][course]) {
        data[campus][course] = {
          cutGrades: [],
          vacancies: [],
        };
      }

      if (
        data[campus][course].cutGrades[data[campus][course].cutGrades.length - 1]?.[0] ===
        year
      ) {
        data[campus][course].cutGrades[data[campus][course].cutGrades.length - 1] = [
          year,
          Math.min(
            cutGrade[1] != -1 ? cutGrade[1] : 100,
            data[campus][course].cutGrades[data[campus][course].cutGrades.length - 1][1]
          ),
          Math.min(
            cutGrade[2] != -1 ? cutGrade[2] : 100,
            data[campus][course].cutGrades[data[campus][course].cutGrades.length - 1][2]
          ),
        ];
      } else {
        data[campus][course].cutGrades.push([
          year,
          cutGrade[1] != -1 ? cutGrade[1] : 100,
          cutGrade[2] != -1 ? cutGrade[2] : 100,
        ]);
      }
      if (
        data[campus][course].vacancies[data[campus][course].vacancies.length - 1]?.[0] ===
        year
      ) {
          data[campus][course].vacancies[data[campus][course].vacancies.length - 1] = [
            year,
            data[campus][course].vacancies[data[campus][course].vacancies.length - 1][1] +
              vacancy[1],
            data[campus][course].vacancies[data[campus][course].vacancies.length - 1][2] +
              vacancy[2],
            data[campus][course].vacancies[data[campus][course].vacancies.length - 1][3] +
              vacancy[3],
          ];
        } else {
          data[campus][course].vacancies.push(vacancy);
      }
    });
  });

  console.log(data);

  return <div></div>;
};

export default GenData;
