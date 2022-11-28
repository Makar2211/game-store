import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { GameCover } from "../GameCover/index.js";
import {GameBuy} from '../GameBuy/index'
import {GameGanre} from '../GameGanre/index.js'
import { setCurrentGame } from "../../redux/games/reducer.js";
import style from "./GameItem.module.scss";

export const GameItem = ({ game }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handelClick = () => {
    dispatch(setCurrentGame(game))
    history.push(`./app/${game.title}`)
  }

  return (
    <div className={style.GameItems} onClick={handelClick}>
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
