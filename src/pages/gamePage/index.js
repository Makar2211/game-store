import React from "react";
import { useSelector } from "react-redux";
import { GameBuy } from "../../components/GameBuy";
import { GameCover } from "../../components/GameCover";
import { GameGanre } from "../../components/GameGanre";
import style from "./GamePage.module.scss";

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  console.log(game)
  if (!game) return null;
  return (
    <div className={style.gamePage}>
      <h1 className="gamePageTitle">{game.title}</h1>
      <div className={style.gamePageContent}>
        <div className={style.gamePageLedt}>
          <iframe
            width="90%"
            height={400}
            src={game.video}
            title="YouTube Video Player"
            frameBorder="null"
          ></iframe>
        </div>
        <div className={style.gamePageRight}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondaryText">Популярные метки этого продукта:</p>
          { 
            game.genres.map((ganre) => (
              <GameGanre NameOfGenre={ganre} key={ganre} />
            ))
          }
          <div className={style.gamePageByGame}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
