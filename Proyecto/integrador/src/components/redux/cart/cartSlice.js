import {createSlice} from '@reduxjs/toolkit';
import { SHIPPING_COST } from '../../utils/constants';
import { 
    addItemToCart, 
    removeItemFromCart, 
    resetShippingCost 
} from './cart-utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    shippingCost: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                shippingCost: SHIPPING_COST,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        },
        removeCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
            };
        },
        clearCart: (state) => {
            return {
                ...state,
                shippingCost: 0,
                cartItems: [],
            };
        },
        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            };
        },
    },
});

export const { addToCart, clearCart, removeCart, toggleHiddenCart} = cartSlice.actions;

export default cartSlice.reducer;