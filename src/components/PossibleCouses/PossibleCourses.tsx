import { useEffect, useState } from 'react'
import './PossibleCourses.scss'

import { allCampus } from '../../data/courses/allCampus';

import { MdOutlineVerified } from "react-icons/md";

export default function PossibleCourses({ goal }: { goal: number }) {

  const [cotism, setCotism] = useState(true)

  return (
    <>
      <div className="inline cotism">
        <div className="broad" onClick={() => { setCotism(false) }} style={{ opacity: cotism ? '0.5' : '1' }}>
          <p >
            Ampla concorrência
          </p>
        </div>
        <div className="quotaholder" onClick={() => { setCotism(true) }} style={{ opacity: cotism ? '1' : '0.5' }}>
          <p>
            Cotista
          </p>
        </div>
      </div>
      <div className="PossibleCourses">
        {/* Interação dos campus */}
        {allCampus.map(campus => {
          return (
            <div className='campus' >
              <h2 className='name' >{campus.campus}</h2>
              {/* Interação dos cursos de cada campus */}
              {campus.courses.map(course => {
                return (
                  <div className='course inline'>
                    <MdOutlineVerified className='icon' style={{ color: goal >= (cotism ? course.grades.quotaholder.lowest : course.grades.broadCompetition.lowest) ? 'rgb(17, 255, 96)' : 'rgb(68, 68, 68)' }} />
                    <div className='name' >{course.name} <div> {(cotism ? course.grades.quotaholder.lowest : course.grades.broadCompetition.lowest)} à {(cotism ? course.grades.quotaholder.highest : course.grades.broadCompetition.highest)}</div></div>

                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}