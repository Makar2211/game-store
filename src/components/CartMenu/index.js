import React from "react";
import style from "./CartMenu.module.scss";
import { calcTotalPrice } from "../until";
import { Button } from "../button";
import {CartItem} from '../CartItem'
export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={style.cartMenu}>
      <div className={style.cartMenuList}>
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пустая"}
      </div>
      {items.length > 0 ? (
        <div className={style.cartMenuArrange}>
          <div className={style.cartMenuTotalPrice}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} грн.</span>
          </div>
          <Button type="primary" size="m" onClick={onclick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
