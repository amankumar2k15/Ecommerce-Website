import { createSlice } from "@reduxjs/toolkit";

const initialCartState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const initialWishlistState = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: initialCartState,
        wishlistItems: initialWishlistState
    },

    reducers: {
        addToCart(state, action) {
            let existingProduct = state.items.find((item) => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeToCart(state, action) {
            // console.log("items selected", action.payload)
            state.items = state.items.filter(item => item._id !== action.payload)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },

        addToWishlist(state, action) {
            let existingProduct = state.wishlistItems.find((item) => item._id === action.payload._id)
            if (existingProduct) {
                existingProduct.quantity += 0
            } else {
                state.wishlistItems.push({ ...action.payload })
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems))
        },

        removeToWishlist(state, action) {
            state.wishlistItems = state.wishlistItems.filter(item => item._id !== action.payload)
            localStorage.setItem("wishlist", JSON.stringify(state.wishlistItems))
        },

        clear(state, action) {
            state.items = [];
            localStorage.removeItem("cart")
        },
        decreaseQuantity(state, action) {
            const findItem = state.items.find((item) => item._id === action.payload)
            if (findItem.quantity === 1) {
                findItem.quantity = 1;
            } else {
                findItem.quantity--;
            }
        },
        increaseQuantity(state, action) {
            const findItem = state.items.find((item) => item._id === action.payload.id)
            if (findItem) {
                findItem.quantity++;
            }
        },
    },

})

export const { addToCart, removeToCart, addToWishlist, removeToWishlist, clear, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;