import { myContext } from "react";
import { faker } from '@faker-js/faker';

const Cart = myContext();

const Context = ({ child }) => {

const products = [...Array(15)].map(() => ({
    id: faker.datatype.uuuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}));

    const [state, dispatch] = useReducer(cartReducer, {
        products:product,
        cart:[]});

   
 return <Cart.Provider>{child}</Cart.Provider>;
};

export default Context;