import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/productSlice"
import cartReducer from "../store/cartSlice"

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    }
})

export default store;