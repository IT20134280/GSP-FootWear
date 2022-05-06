import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM  } from "../Types";

import React from 'react'

const CartReducer = (state, action) => {
  switch (action.type) {
      case SHOW_HIDE_CART: {
          return {
              ...state,
              SHOW_HIDE_CART: !state.showCart
          }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                cartItem: [...state.cartItems, action.payload]
            }
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.id !== action.payload)
            }
        
      }
      default:
          return state
  }
}

export default CartReducer;
