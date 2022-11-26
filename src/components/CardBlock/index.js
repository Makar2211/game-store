import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import style from './CardBlock.module.scss';


export const CardBlock = () => {
  return (
    <div className={style.CardBlock}>
        <AiOutlineShoppingCart size={25} className={style.cardBlockIcon}/>
        <span className={style.CardBlockPrice}> 1999 грн.</span>
    </div>
  )
}
