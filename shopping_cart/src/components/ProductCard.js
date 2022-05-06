import CartContext from "../context/mycart/CartContext";
import { useContext } from "react";

const ProductCard = ({product}) => {
    const{ addToCart } = useContext(CartContext)
  return (
     <div>
         <div>
             <img src={product.image} alt='' />
             <h3>{product.name}</h3>
             <div>
                 <h4>{product.price}</h4>
             </div>
             <button onClick={() => addToCart(product)}>
                 Add to Cart
             </button>
         </div>
     </div>
  )
}

export default ProductCard