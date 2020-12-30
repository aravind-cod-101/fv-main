import {
    createAction
} from '@reduxjs/toolkit';

const addProduct = createAction("addProduct");
const removeProduct = createAction("removeProduct");

const loadProduct = (product) => {
    return {
        type: addProduct.type,
        payload: {
            ...product
        }
    }
}

export {
    loadProduct,
    addProduct,
    removeProduct,
};