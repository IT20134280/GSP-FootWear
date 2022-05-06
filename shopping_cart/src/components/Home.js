//import React from 'react'

import { cartState } from "../context/Context";

const Home = () => {
  const {
    state: {products},
  }=cartState();
  console.log(products);
  return <div>Home</div>;
};

export default Home;