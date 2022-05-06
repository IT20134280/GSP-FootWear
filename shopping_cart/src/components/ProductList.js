import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
 

 
 
 const ProductList = ({prod}) => {
    const{
        state: {cart},
        dispatch,

    }=CartState();

   return  (
       <div>
           <Card>
               <Card.Body>
                   <Card.Title>{prod.name}</Card.Title>
                   <Card.Subtitle>
                       <span>$ {prod.price.spilt(".")[0]}</span>
                       <div>Fast Delivery</div>
                       <div>7 days Delivery</div>
                   </Card.Subtitle>
                   {
                       cart.some(p=>p.id===prod.id)? (
                        <Button variant="danger">
                            Remove from cart
                        </Button>
                       ):(
                        <Button disabled={!prod.instock}>
                          {!prod.instock ? "Out of stock" :"Add to cart"}
                        </Button>
                        )
                   }
                  
                   
               </Card.Body>
           </Card>
       </div>
   );
   
 };
 
 export default ProductList;