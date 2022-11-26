import React from "react";
import { GameCover } from "../GameCover/index.js";
import {GameBuy} from '../GameBuy/index'
import {GameGanre} from '../GameGanre/index.js'
import style from "./GameItem.module.scss";

export const GameItem = ({ game }) => {
  return (
    <div className={style.GameItems}>
      <GameCover image={game.image}/>
      <div className={style.details}>
        <span className={style.title}>{game.title}</span>
        <div className={style.ganre}>
        {
          game.genres.map((genre) => (
            <GameGanre NameOfGenre={genre} key={genre} />
            ))
        }
        </div>

        <div className={style.buy}>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  );
};
