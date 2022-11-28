import React from 'react'
import { useDispatch } from 'react-redux'
import { GameCover } from '../GameCover'
import { AiOutlineCloseCircle } from 'react-icons/ai' 
import style from './OrderItem.module.scss'
import { deleteItemFromCart } from '../../redux/card/reducer'

export const OrderItem = ( {game} ) => {
    const dispatch = useDispatch()

    const handelClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
  return (
    <div className={style.OrderItem}>
        <div className={style.orderItemCover}>
            <GameCover image={game.image}/>

        </div>
        <div className={style.orderItemsTitle}>
            <span>{game.title}</span>   

        </div>
        <div className={style.OrderItemPrice}>
            <span>{game.price} грн.</span>
            <AiOutlineCloseCircle 
            size={25}
            className='cardItemDeleteIcon'
            onClick={handelClick}
            />
        </div>
    </div>
  )
}
