import React from "react";
import style from "./CartItem.module.scss";

export const CartItem = ({ price, title, id }) => {
  return (
    <div className={style.CartItem}> 
        <span>{title}</span>
        <div className={style.CartItemPrice}>{price} грн.</div>
    </div>
  );
};
