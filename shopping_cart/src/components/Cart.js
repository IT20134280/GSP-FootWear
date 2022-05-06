//import React from 'react'
import { useContext } from "react";
import CartContext from "../context/mycart/CartContext";
//import formatCurrency from "format-currency";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", Symbol: "$" }
  return <>
    {showCart && (
      <div>
        <div style={{ textAlign: 'right' }}>
          <i style={{ cursor: 'pointer' }}
            onClick={showHideCart}>

          </i>
        </div>
        <div>
          {cartItems.length === 0 ? (<h4>Cart is Empty</h4>) : (
            <ul>
              {cartItems.map(item => (
                <cartItems key={item._id} item={item} />
              ))}
            </ul>
          )}
        </div>
        <div>
          Cart Total
        </div>
         
      </div>
    )
    }
  </>;

};

export default Cart;