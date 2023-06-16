import React from "react";

import text from "./compusText";

type Props = {};

type Grades = {
  broadCompetition: {
    highest: number;
    lowest: number;
  };
  quotaholder: {
    highest: number;
    lowest: number;
  };
};

type Course = {
  name: string;
  formation: string;
  grades: Grades;
  vacancies: {
    no: number;
    a1: number;
    a2: number;
  };
};

type Campus = {
  campus: string;
  courses: Course[];
};

type CampusDevType = Object & {
  [campusName: string]: {
    [courseName: string]: {
      [formationName: string]: {
        grades: Grades;
        vacancies: {
          no: number;
          a1: number;
          a2: number;
        };
      };
    };
  };
};

const GetCampusFromText = (props: Props) => {
  function extract(text: string) {
    let allCampusDevType: CampusDevType = {};
    const pages = text
      .split(`SISTEMA SERIADO DE AVALIAÇÃO 3 - SSA3\nCLASSIFICADOS`)
      .slice(1);

    pages.forEach((page, i) => {
      let lines = page.split(`\n`);

      let initialGrades = {
        broadCompetition: {
          highest: -1,
          lowest: -1,
        },
        quotaholder: {
          highest: -1,
          lowest: -1,
        },
      };
      let initialVacancies = {
        no: 0,
        a1: 0,
        a2: 0,
      };

      const campus = lines[1]?.slice(8);
      const course = lines[2]?.slice(7).split(" - ")[0];
      const type = lines[2]?.slice(7).split(" - ")[1];
      // const shift = lines[3]?.slice(7);

      lines = lines.slice(5, lines.length - (page.includes("Total:") ? 4 : 3));

      allCampusDevType[campus] = allCampusDevType[campus] ?? {};
      allCampusDevType[campus][course] = allCampusDevType[campus][course] ?? {};
      allCampusDevType[campus][course][type] =
        allCampusDevType[campus][course][type] ?? {};
      allCampusDevType[campus][course][type].grades =
        allCampusDevType[campus][course][type].grades ?? initialGrades;
      allCampusDevType[campus][course][type].vacancies =
        allCampusDevType[campus][course][type].vacancies ?? initialVacancies;

      const grades = allCampusDevType[campus][course][type].grades;
      const vacancies = allCampusDevType[campus][course][type].vacancies;
      
      const regex = /^(\d+)\s+([A-Z\s]+)\s+(\d+\.\d+)\s+(\d+)\s+(NÃO|A[12])$/; // Expressão regular para capturar o nome e a nota
      
      lines.forEach((value: string, index) => {
        let match = value.match(regex);
        if (match) {
          const n = Number(match[3]);
          if (match[5] == "NÃO") {
            vacancies.no += 1;
            if (
              grades.broadCompetition.highest == -1 &&
              grades.broadCompetition.lowest == -1
            ) {
              // console.log("1.1", grades.broadCompetition);

              grades.broadCompetition.highest = Number(n);
              grades.broadCompetition.lowest = Number(n);
            } else {
              // console.log("1.2", grades.broadCompetition);
              grades.broadCompetition.highest =
                n > grades.broadCompetition.highest
                  ? n
                  : grades.broadCompetition.highest;
              grades.broadCompetition.lowest =
                n < grades.broadCompetition.lowest
                  ? n
                  : grades.broadCompetition.lowest;
            }
          } else if (match[5] == "A1" || match[5] == "A2") {
            if (match[5] == "A1") {
              vacancies.a1 += 1;
            } else if (match[5] == "A2") {
              vacancies.a2 += 1;
            }
            if (
              grades.quotaholder.highest == -1 &&
              grades.quotaholder.lowest == -1
            ) {
              // console.log("2.1", grades.quotaholder);
              grades.quotaholder.highest = Number(n);
              grades.quotaholder.lowest = Number(n);
            } else {
              // console.log("2.2", grades.quotaholder, n);
              grades.quotaholder.highest =
                n > grades.quotaholder.highest ? n : grades.quotaholder.highest;
              grades.quotaholder.lowest =
                n < grades.quotaholder.lowest ? n : grades.quotaholder.lowest;
            }
          }
        }

        if (index == lines.length - 1) {
          console.log(i, index + 1);
        }
      });

      // allCampusDevType[campus][course][type] = {};

      if (i == pages.length - 1) {
        console.log(allCampusDevType, course, type);
      }
    });

    return allCampusDevType;
  }

  function organize(allCampusToOrganize: CampusDevType) {
    const result = Object.entries(allCampusToOrganize).map(
      ([campus, courses]) => {
        const courseList = Object.entries(courses).map(
          ([course, formations]) => {
            const formationList = Object.entries(formations).map(
              ([formation, { grades, vacancies }]) => {
                return {
                  name: course,
                  formation,
                  grades,
                  vacancies,
                };
              }
            );
            return formationList;
          }
        );

        return {
          campus,
          courses: courseList.flat(),
        };
      }
    );

    return result;
  }

  console.log(organize(extract(text)));

  return <div></div>;
};

export default GetCampusFromText;
