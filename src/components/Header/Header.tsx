import { useEffect, useState } from 'react'
import './Header.scss'

import { MdNavigateBefore } from "react-icons/md";

import { Link } from 'react-router-dom'

export default function Header({ hasLink, backLink }: { hasLink: boolean, backLink?: string }) {
  return (
    <div className="Header">
      {hasLink ?
        <Link className='BackLink' to={backLink as any}>
          <MdNavigateBefore className='Icon' />
          <p className='Text'>voltar</p>
        </Link> :
        <h1 className='Title'>What <span>Grade</span></h1>
      }
    </div>
  )
}