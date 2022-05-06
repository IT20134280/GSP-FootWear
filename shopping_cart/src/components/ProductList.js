import { Card } from "react-bootstrap";
 

 
 
 const ProductList = ({prod}) => {
   return  (
       <div>
           <Card>
               <Card.body>
                   <Card.Title>{prod.name}</Card.Title>
                   <Card.Subtitle>
                       <span>$ {prod.price.spilt(".")[0]}</span>
                       <div>Fast Delivery</div>
                       <div>7 days Delivery</div>
                   </Card.Subtitle>
               </Card.body>
           </Card>
       </div>
   );
   
 };
 
 export default ProductList;