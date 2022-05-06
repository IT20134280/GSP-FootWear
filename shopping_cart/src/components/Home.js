//import React from 'react'

 
 
import products from "../context/data";
import "./styles.css";
import ProductCard from "./ProductCard";

const Home = () => {
  return(
    <div className="product">
      {products.map((product) =>(
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    );
  };
 

export default Home;