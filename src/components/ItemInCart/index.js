import React from 'react'
import style from './ItemInCart.module.scss'

export const ItemInCart = ({
    quantity = 0
}) => {
  return quantity > 0 ? (
    <div className={style.itemsInCart}>
        {quantity}
    </div>
  ) : null
}
