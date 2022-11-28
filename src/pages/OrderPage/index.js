import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/OrderItem'
import { calcTotalPrice } from '../../components/until'
import style from './OrderPage.module.scss'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCard)

    if(items.length < 1) {
        return <h1>Ваша корзина пуста</h1>
    }

  return (
    <div className='orderPage'>
        <div className='orderPageLeft'>
            {
                items.map(game => <OrderItem game={game}/>)
            }
        </div>
        <div className='orderPageRight'>
            <div className='OrderPageTotalPrice'> 
                <span>
                    {items.length} товаров на суму {calcTotalPrice(items)} грн.
                </span>
            </div>
        </div>
    </div>
  )
}
