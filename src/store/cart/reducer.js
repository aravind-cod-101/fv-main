import {
    createSlice
} from "@reduxjs/toolkit";
import {
    addItem,
    updateItem,
    removeItem,
    clearCart
} from "./actions";
import {
    Card
} from "@material-ui/core";

const cart = createSlice({
    name: "product",
    initialState: [],
    extraReducers: {
        [addItem.type]: (cart, action) => {
            let newItem = {
                ...action.payload
            };
            cart = cart.filter((item) => item['id'] !== newItem['id']);
            cart = [...cart, newItem];
            return cart;
        },
        [updateItem.type]: (cart, action) => {
            let item = {
                ...action.payload
            };
            for (let i in cart) {
                if (cart[i]['id'] === item['id']) {
                    cart[i] = {
                        ...item
                    }
                }
            }
            return cart;
        },
        [removeItem.type]: (cart, action) => {
            let newItem = {
                ...action.payload
            };
            cart = cart.filter((item) => item['id'] !== newItem['id']);
            return cart;
        },
        [clearCart.type]: (cart, action) => {
            cart = [];
            return cart;
        }
    },
});
const cartReducer = cart.reducer;
export default cartReducer;