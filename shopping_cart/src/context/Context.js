import { myContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";

const Cart = myContext();

const Context = ({ child }) => {

const products = [...Array(15)].map(() => ({
    id: faker.datatype.uuuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}));

    const [state, dispatch] = useReducer(cartReducer, {
        products:products,
        cart:[]});

   
 return <Cart.Provider value={{ state, dispatch }}>{child}</Cart.Provider>;
};

export default Context;

export const cartState = () => {
    return useContext(Cart);
}