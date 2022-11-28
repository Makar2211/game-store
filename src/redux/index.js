import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./card/reducer";
import gamesReducer from "./games/reducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    game: gamesReducer,
  },
});
