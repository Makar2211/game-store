import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteItemFromCart, setItemInCart} from '../../redux/card/reducer'
import { Button } from '../button'
import style from './GameBuy.module.scss'

export const GameBuy = ({game}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCard)

  const isItemInCart = items.some(item => item.id === game.id)
  const hadldelClick = (e) => {
    e.stopPropagation();
    if( isItemInCart) {
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))

    }
  }
  return (
    <div className={style.gameBuy}>
        <span className={style.price}>{game.price} грн.</span>
        <Button
            type={isItemInCart ? 'secondary' : "primary"}
            onClick={hadldelClick}

        >
            {isItemInCart ? 'Убрать из корзины' :  "в Корзину"}
        </Button>
    </div>
  )
}
