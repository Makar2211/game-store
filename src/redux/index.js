import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./card/reducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
