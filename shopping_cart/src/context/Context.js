import { createContext } from "react";

const Cart = createContext();

const Context = ({ child }) => {
 return <Cart.Provider>{child}</Cart.Provider>;
};

export default Context;