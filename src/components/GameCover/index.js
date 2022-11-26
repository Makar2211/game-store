import React from 'react'
import style from './GameCover.module.scss'

export const GameCover = ({ image = '' }) => {
    return (
        <div
            className={style.GameCover}
            style={{ backgroundImage: `url(${image})` }}
      />
    )
}
