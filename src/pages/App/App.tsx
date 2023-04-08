import './App.scss'

import { useParams } from 'react-router-dom'
import { MdWarningAmber } from "react-icons/md";

import { allPeriods } from '../List/List'
import Header from '../../components/Header/Header'
import LastYear from './components/lastYear/lastYear'
import OldYears from './components/oldYear/oldYear'

import whatsapp from '/images/whatsapp.png'

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

  const lastYear = allPeriods.filter((pd) => pd.period === period)[0].lastYear

  return (
    <div className="App">
      <Header hasLink={true} backLink='/' />
      <div className='Content'>
        <LastYear period={period as string} /> :
      </div>
      <p id='by'> By: Douglas
        <a href="https://wa.me/5581996405552">
          <img src={whatsapp} />
        </a>
      </p>
      <div className='BottomDegrade'>

      </div>
    </div>
  )
}