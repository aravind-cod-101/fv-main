import axios from 'axios';

export const addToCart = (id,qty) => async(dispatch,getState) =>{

    const {data} = await axios.get(`/api/products/${id}`)
 
    dispatch({
        type:'ADD_TO_CART',
        payload:{
            product:data._id,
            image:data.image,
            name:data.name,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState)=>{
dispatch({
    type:'REMOVE_FROM_CART',
    payload:id
})

localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
      type: 'CART_SAVE_SHIPPING_ADDRESS',
      payload: data,
    })
  
    localStorage.setItem('shippingAddress', JSON.stringify(data))
  }

  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
      type: 'CART_SAVE_PAYMENT_METHOD',
      payload: data,
    })
  
    localStorage.setItem('paymentMethod', JSON.stringify(data))
  }