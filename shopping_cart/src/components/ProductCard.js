import data from "../context/data";
 
 

const ProductCard = ({product}) => {
  return (
     <div>
         <div>
             <img src={product.image} alt='' />
             <h3>{product.name}</h3>
             <div>
                 <h4>{product.price}</h4>
             </div>
         </div>
     </div>
  )
}

export default ProductCard