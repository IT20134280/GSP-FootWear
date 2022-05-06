import {useReducer} from 'react';
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM  } from "../Types";

const CartState = ({children}) => {
    const initialState ={
        showCart: falis,
        cartItem: [],
    };
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({types: ADD_TO_CART, payload: item});
    };
    const showHideCart = () => {
        dispatch({type: SHOW_HIDE_CART});
    };
    const removeItem = (id) =>{
        dispatch({type: REMOVE_ITEM, payload: id});
    };
  return <CartContext.Provider value={{
      showCart: state.showCart,
      cartItem: state.cartItem,
      addToCart,
      showHideCart,
      removeItem,
  }}></CartContext.Provider>;
};

export default CartState;