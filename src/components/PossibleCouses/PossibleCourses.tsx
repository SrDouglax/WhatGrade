import { useEffect, useState } from "react";
import "./PossibleCourses.scss";

import { allCampus } from "../../data/courses/allCampus";

import { MdOutlineVerified, MdGpsFixed } from "react-icons/md";

export default function PossibleCourses({
  goal,
  setGoal,
}: {
  goal: number;
  setGoal: Function;
}) {
  const [cotism, setCotism] = useState(true);

  function handleSetGoal(course: any): number {
    const value = cotism
      ? course.grades.quotaholder.lowest
      : course.grades.broadCompetition.lowest;
    (document.querySelector(".Content") as HTMLDivElement).scrollTop = 80;
    (document.querySelector(".finalgrade") as HTMLInputElement).value = value;
    return value;
  }
  return (
    <>
      <div className="inline cotism">
        <div
          className="broad"
          onClick={() => {
            setCotism(false);
          }}
          style={{ opacity: cotism ? "0.5" : "1" }}
        >
          <p>Ampla concorrência</p>
        </div>
        <div
          className="quotaholder"
          onClick={() => {
            setCotism(true);
          }}
          style={{ opacity: cotism ? "1" : "0.5" }}
        >
          <p>Cotista</p>
        </div>
      </div>
      <div className="PossibleCourses">
        {/* Interação dos campus */}
        {allCampus.map((campus, index) => {
          return (
            <div className="campus" key={index}>
              <h2 className="name">{campus.campus}</h2>
              {/* Interação dos cursos de cada campus */}
              {campus.courses.map((course, index) => {
                return (
                  <div className="course inline" key={index}>
                    <MdOutlineVerified
                      className="icon"
                      style={{
                        color:
                          goal >=
                          (cotism
                            ? course.grades.quotaholder.lowest
                            : course.grades.broadCompetition.lowest)
                            ? "rgb(17, 255, 96)"
                            : "rgb(68, 68, 68)",
                      }}
                    />
                    <div className="name">
                      {course.name}
                      <div>
                        {(cotism
                          ? course.grades.quotaholder.lowest
                          : course.grades.broadCompetition.lowest
                        )
                          .toString()
                          .replace(".", ",")}
                        {' a '}
                        {(cotism
                          ? course.grades.quotaholder.highest
                          : course.grades.broadCompetition.highest
                        )
                          .toString()
                          .replace(".", ",")}
                        <span>{course.formation}</span>
                      </div>
                    </div>
                    <MdGpsFixed
                      className="setGoal"
                      onClick={() => {
                        setGoal(handleSetGoal(course), true);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
