import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'card', 
    initialState: {
        itemsInCard: [
            
        ]
    }, 
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCard.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCard = state.itemsInCard.filter(game => game.id !== action.payload)
        }
    }
})

export const {setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer