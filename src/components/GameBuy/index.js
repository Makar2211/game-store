import React from 'react'
import { Button } from '../button'
import style from './GameBuy.module.scss'

export const GameBuy = ({game}) => {
  return (
    <div className={style.gameBuy}>
        <span className={style.price}>{game.price} грн.</span>
        <Button
            type="primary"
            onClick={ () => null}

        >
            в Корзину
        </Button>
    </div>
  )
}
