//import React from 'react'

 
 
import data from "../context/data";
import "./styles.css";

const Home = () => {
  return(
    <div>
      {data.map((data) =>(
        data.name
      ))}
    </div>)}
 /// const {
 //   state: {products},
 // }=CartState();
//  console.log(products);
 // return ( 
 //   <div classsName="product">
  //    {products.map((prod) => {
  //      return <ProductList prod={prod} key={prod.id} />;
  //    })}
  //  </div>
 // );
//}

export default Home;