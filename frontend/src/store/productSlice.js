import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_URL } from "../constants";

export const STATUSES = Object.freeze({
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})

let selectedProduct = localStorage.getItem("selectedProduct") ? JSON.parse(localStorage.getItem("selectedProduct")) : null

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
        selectedProduct: selectedProduct,
    },

    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
            localStorage.setItem("selectedProduct", JSON.stringify(action.payload))
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR
            })
            .addCase(fetchProductsByCategory.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchProductsByBrand.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductsByBrand.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductsByBrand.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(fetchProductsByPriceRange.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProductsByPriceRange.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProductsByPriceRange.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(searchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })

    }
})

export const { selectProduct } = productSlice.actions
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const res = await axios.get(`${SERVER_URL}/product/get-products`)
    const data = await res.data
    return data
})

export const fetchProductsByCategory = createAsyncThunk("products/fetchByCategory", async (categoryName) => {
    const res = await axios.get(`${SERVER_URL}/product/get-products?categoryName=${categoryName}`)
    const data = await res.data;
    return data;
}
)

export const fetchProductsByBrand = createAsyncThunk("products/fetchByBrand", async (brandName) => {
    const res = await axios.get(`${SERVER_URL}/product/get-products?brand=${brandName}`)
    const data = await res.data
    return data
})

export const fetchProductsByPriceRange = createAsyncThunk("products/fetchByPriceRange", async ({ minPrice, maxPrice }) => {
    const res = await axios.get(`${SERVER_URL}/product/get-products?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    const data = await res.data
    return data
})

export const searchProducts = createAsyncThunk("products/search", async (searchQuery) => {
    const res = await axios.get(`${SERVER_URL}/product/get-products?searchQuery=${searchQuery}`);
    const data = await res.data;
    return data;
});