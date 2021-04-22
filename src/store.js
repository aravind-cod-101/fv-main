import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, 
        productCreateReducer, 
        productDeleteReducer, 
        productUpdateReducer,
        productReviewCreateReducer, 
        productTopRatedReducer,
        vendorproductReducer,
        vendorProductCreateReducer,
        vendorProductUpdateReducer,
        vendorProductDeleteReducer,
        unPublishedProductListReducer
      } from './reducers/productReducer'
import {productDetailReducer} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'
import { userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer, userListReducer, userDeleteReducer,userUpdateReducer, } from './reducers/userReducer'
import { orderCreateReducer,orderDetailsReducer,orderPayReducer,orderListMyReducer,orderListReducer,orderDeliverReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productReviewCreateReducer,
    productTopRated:productTopRatedReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userList:userListReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliverReducer,
    vendorProducts:vendorproductReducer,
    vendorProductCreate:vendorProductCreateReducer,
    vendorProductUpdate:vendorProductUpdateReducer,
    vendorProductDelete:vendorProductDeleteReducer,
    unPublishedProductList:unPublishedProductListReducer
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
    cart : {cartItems:cartItemsFromStorage, shippingAddress: shippingAddressFromStorage,},
    userLogin :{userInfo:userInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store 