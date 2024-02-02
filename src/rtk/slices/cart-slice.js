import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'


export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action)=>{
            const repeatedProduct = state.find((product)=>product.id === action.payload.id)
            const clonedProduct = {...action.payload, quantity: 1}
            if (repeatedProduct) {
                Swal.fire({
                    title: "This Product Already Added to Cart!",
                    confirmButtonText: "OK",
                })
            }else {
                state.push(clonedProduct)
            }
        },
        removeFromCart: (state, action)=>{
            return state.filter((product)=> product.id !== action.payload.id)
        },
        clearCart: (state, action)=>{
            return []
        }
    }
})
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;