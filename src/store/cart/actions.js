import {
    createAction
} from '@reduxjs/toolkit';

const addItem = createAction("addItem");
const updateItem = createAction("updateItem");
const removeItem = createAction("removeItem");
const clearCart = createAction("clearCart")

const addCart = (item) => {
    return {
        type: addItem.type,
        payload: {
            ...item
        }
    }
}

const updateCart = (item) => {
    return {
        type: updateItem.type,
        payload: {
            ...item
        }
    }
}

const removeCart = (item) => {
    return {
        type: removeItem.type,
        payload: {
            ...item
        }
    }
}

const clear = () => {
    return {
        type: clearCart.type
    }
}

export {
    addCart,
    removeCart,
    addItem,
    updateItem,
    updateCart,
    removeItem,
    clearCart,
    clear
};