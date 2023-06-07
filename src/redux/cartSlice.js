import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        quantityCart: 0,
        productsCart: [],
        isOpen: false,
        sum: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.isOpen = true
            const indexProduct = state.productsCart.findIndex(product => product.id === action.payload.id)
            state.sum += action.payload.price * action.payload.quantity
            if(indexProduct === -1) {
                state.productsCart.push(action.payload)
                state.quantityCart++
            } else {
                state.productsCart[indexProduct].quantity += action.payload.quantity
            }
        },
        addQuantity: (state, action) => {
            const idx = state.productsCart.findIndex((p) => p.id === action.payload.id)
            state.productsCart[idx].quantity = action.payload.quantity
        },
        removeQuantity: (state, action) => {
            const idx = state.productsCart.findIndex((p) => p.id === action.payload.id)
            if(action.payload.quantity === 0) {
                state.productsCart = state.productsCart.filter((p) => p.id !== action.payload.id)
                state.quantityCart = state.quantityCart -1 
            } else {
                state.productsCart[idx].quantity = action.payload.quantity
            }
        },
        deleteProductFromCart: (state, action) => {
            state.productsCart = state.productsCart.filter((p) => p.id !== action.payload);
            state.quantityCart = state.quantityCart - 1;
        },          
        closeModal: (state) => {
            state.isOpen = false
        },
        openModal: (state) => {
            state.isOpen = true
        },
        resetCart: (state) => {
            state.isOpen = false;
            state.quantityCart = 0;
            state.productsCart = [];
            state.sum = 0;
        }
    }
})

export const { addToCart, deleteProductFromCart, closeModal, openModal, addQuantity, removeQuantity, resetCart} = cartSlice.actions
export default cartSlice.reducer