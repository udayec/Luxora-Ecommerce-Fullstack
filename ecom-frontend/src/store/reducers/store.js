import {configureStore} from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./ErrorReducer";
import { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import { paymentMethodReducer } from "./paymentMethodReducer";
import { orderReducer } from "./ordersReducer";
import  addressReducer  from "./addressReducer";

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;    

const selectUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
    ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
    : [];
    
    
const initialState = {
    auth: { user: user, selectUserCheckoutAddress },
    carts: { cart: cartItems },
};    

export const store = configureStore({
    reducer: {products: productReducer,
              errors: errorReducer,
              carts: cartReducer,
              auth: authReducer,
              payment: paymentMethodReducer,
              orders: orderReducer,
              addresses: addressReducer
              },
    preloadedState: initialState,
})
 
export default store; 