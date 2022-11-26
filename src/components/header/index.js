import React from 'react'
import { Link } from 'react-router-dom'
import {CardBlock} from '../CardBlock/index'
import style from './Header.module.scss'

export const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.wrapper}>
            <Link className={style.title} to='/'>
                Game store
            </Link>
        </div>
        <div className={style.cardBtn}>
            <CardBlock/>
        </div>
    </div>
  )
}
