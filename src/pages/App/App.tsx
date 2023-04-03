import { useEffect, useState } from 'react'
import './App.scss'
import { useDebounce } from '../../hooks/useDebounce'

import whatsapp from '/images/whatsapp.png'
import Header from '../../components/Header/Header'
import { useNavigate, useParams } from 'react-router-dom'

import { MdWarningAmber } from "react-icons/md";

import { allPeriods } from '../List/List'
import LastYear from './components/lastYear/lastYear'

type Data = {
  [key: string]: { grade_1?: string, grade_2?: string }
}

export default function App() {

  const { period } = useParams()
  
  const invalidPeriod = allPeriods.every((pd) => pd.period !== period)
  if (invalidPeriod) {
    return (
      <div className='InvalidPeriod' >
        <MdWarningAmber className='Icon' />
        <p className='Text' >Algo parece errado... As datas não batem...</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Header hasLink={true} backLink='/' />
      <div className='Content'>
        <LastYear period={period as any} />
      </div>
    </div>
  )
}