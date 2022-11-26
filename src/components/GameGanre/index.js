import React from "react";
import style from "./GameGanre.module.scss";

export const GameGanre = ({ NameOfGenre = '' }) => {
  return (
    <>
      <span className={style.GameGanre}> {NameOfGenre} </span>
    </>
  );
}
