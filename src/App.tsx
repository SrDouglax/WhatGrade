import { useEffect, useRef, useState } from 'react'
import './App.scss'
import { useDebounce } from './hooks/useDebounce'

import whatsapp from '/images/whatsapp.png'

type Data = {
  [key: string]: { grade_1?: string, grade_2?: string }
}

function App() {

  const [userData, setUserData] = useState<any>(['', '', '', '', ''])
  const [inputText, setInputText] = useState('')

  function setFirstGrade(array: string[]) {
    let data: Data = {};
    array.forEach((value: string, index) => {
      const partes = value.split(" ");
      const name = partes.slice(1, -1).join(" ");
      const grade = partes[partes.length - 1];
      data[name] = { grade_1: grade }
    })
    return data
  }

  function setSecondGrade(array: string[], previusData: any) {
    let data: Data = {};
    array.forEach((value, index) => {
      const partes = value.split(" ");
      const name: string = partes.slice(1, -1).join(" ");
      const grade: string = partes[partes.length - 1];
      data[name] = { ...previusData[name], grade_2: grade }
    })
    return data
  }

  const handleInputChange = useDebounce((e: any) => {
    loadCode().then((data: Data) => {
      let possibleName = Object.keys(data).sort().filter(chave => (chave.indexOf(inputText.toUpperCase()) === 0 ? chave.includes(inputText.toUpperCase()) : false));
      if (possibleName.length < 1) {
        return
      }
      let { grade_1, grade_2 } = data[possibleName[0]]
      let grd_1 = Number((grade_1 || '').replace(',', '.'))
      let grd_2 = Number((grade_2 || '').replace(',', '.'))
      let grade = calculateGrade(grd_1, grd_2, userData[4])?.toFixed(3) || ''
      grade = Number(grade) < 0 ? 'Meta baixa' : Number(grade) > 1000 ? 'Meta alta' : grade;
      if (possibleName[0] !== userData?.[0]) {
        if (inputText.length > 0) {
          setUserData((e: any) => { return [possibleName[0], grd_1, grd_2, grade, e[4]] })
        } else {
          setUserData((e: any) => ['', '', '', '', e[4]])
        }
      }
    })
  }, 500)

  async function loadCode() {
    let lines_ssa1: string[] = [];
    let lines_ssa2: string[] = [];
    let data_ssa = {};

    await fetch('./data/ssa1.txt')
      .then(response => response.text())
      .then(minhaString => lines_ssa1 = minhaString.split("\n").map((data) => data.replace('\r', '')));
    await fetch('./data/ssa2.txt')
      .then(response => response.text())
      .then(minhaString => lines_ssa2 = minhaString.split("\n").map((data) => data.replace('\r', '')));

    console.log('loading...')

    data_ssa = setFirstGrade(lines_ssa1)
    data_ssa = setSecondGrade(lines_ssa2, data_ssa)
    return data_ssa
  }

  function calculateGrade(grade1: number, grade2: number, expectedGrade: number) {
    return expectedGrade !== 0 ? -((grade1 * 3 + grade2 * 3 - expectedGrade * 10) / 4) : undefined
  }

  useEffect(() => {
    handleInputChange()
  }, [inputText])

  const handleOnChangeGoal = useDebounce((e: any) => {
    setUserData((oldUser: any) => {
      const grade = Number((calculateGrade(oldUser[1], oldUser[2], Number(e.target.value)) || -1).toFixed(3))
      if (inputText.length === 0) return oldUser
      const updatedUser = [...oldUser]; // cria uma cópia do array do estado atual

      updatedUser[3] = grade < 0 ? 'Meta baixa' : grade > 1000 ? 'Meta alta' : grade; // atualiza o terceiro item do array com o novo valor
      updatedUser[4] = Number(e.target.value)

      return updatedUser; // retorna o array atualizado para ser definido como o novo estado
    })
  }, 500)

  return (
    <div className="App">
      <h1 className='title'>SSA <span>GRADES</span></h1>
      <h2 className='subtitle'>2021 - 2023</h2>
      <p className="name">{userData?.[0]}</p>
      <input type="text" className='input' placeholder='Digite seu nome' onChange={(e) => { setInputText(e.target.value) }} />
      <div className="grades">
        <input type="text" disabled className="grade grade1" value={userData?.[1]} placeholder={'SSA1'} />
        <input type="text" disabled className="grade grade2" value={userData?.[2]} placeholder={'SSA2'} />
        <input type="text" disabled className="grade grade3" id='grade3' value={userData?.[3]} placeholder={'SSA3'} />
        <p>Nota SSA1</p>
        <p>Nota SSA2</p>
        <p>Nota SSA3</p>
      </div>
      <div className="goal">
        <input type="number" className="grade finalgrade" placeholder={'Sua meta'} onChange={handleOnChangeGoal as React.ChangeEventHandler} />
        <p>Nota Final</p>
      </div>
      <p id='by'> Por: Marcos Douglas
        <a href="https://wa.me/5581996405552">
          <img src={whatsapp} />
        </a>
      </p>
    </div>
  )
}

export default App
