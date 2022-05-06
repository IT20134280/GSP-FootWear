//import React from 'react'

import { CartState } from "../context/Context";
import ProductList from "./ProductList";
import "./styles.css";

const Home = () => {
  const {
    state: {products},
  }=CartState();
  console.log(products);
  return ( 
    <div classsName="product">
      {products.map((prod) => {
        return <ProductList prod={prod} key={prod.id} />;
      })}
    </div>
  );
};

export default Home;