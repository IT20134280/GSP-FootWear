import { myContext } from "react";
import faker from "faker";

const Cart = myContext();

const Context = ({ child }) => {

const products = [...Array(15)].map(() => ({
    id: faker.datatype.uuuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}))

 return <Cart.Provider>{child}</Cart.Provider>;
};

export default Context;