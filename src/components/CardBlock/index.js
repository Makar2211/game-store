import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import style from "./CardBlock.module.scss";
import { CartMenu } from "../CartMenu/index";
import { calcTotalPrice } from "../until";
import { ItemInCart } from "../ItemInCart";
import { useHistory } from "react-router";

export const CardBlock = () => {
  const [isCardMenuVisible, setIsCardMenuVisible] = React.useState(false)
  const items = useSelector((state) => state.cart.itemsInCard);
  const totalPrice = calcTotalPrice(items);
  const history = useHistory()
  const handelClick = useCallback(() => {
    setIsCardMenuVisible(false)
    history.push('/order')
  }, [history]) 

  return (
    <div className={style.CardBlock}>
      <ItemInCart  quantity={items.length}/>
      <AiOutlineShoppingCart size={25}  className={style.cardBlockIcon} onClick={() => setIsCardMenuVisible(!isCardMenuVisible)} />
      {totalPrice > 0 ? (
        <span className={style.CardBlockPrice}> {totalPrice} грн.</span>
      ) : null}
      {isCardMenuVisible && <CartMenu items={items} onClick={handelClick} /> }
    </div>
  );
};
