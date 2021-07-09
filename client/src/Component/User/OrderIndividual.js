import React from 'react';
import OrderUI from './OrderUI';

const OrderIndividual = ({ item }) => {
    const { product, quantity } = item;
    const { productName, price } = product;
    console.log(product,quantity);
    return (
        <tbody>
            <tr className="grid grid-cols-4">
                <td className="p-6 col-span-2">{productName}</td>
                <td className="mx-12 p-6">{price}</td>
                <td className="mx-12 p-6">{quantity}</td> 
            </tr>
        </tbody>
    )
};

export default OrderIndividual;