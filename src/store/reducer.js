import productReducer from "./product/reducer";
import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
const {
    combineReducers
} = require("@reduxjs/toolkit");

const reducer = combineReducers({
    product: productReducer,
    user: userReducer,
    cart: cartReducer,
})

export default reducer;