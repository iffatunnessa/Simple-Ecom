import React from 'react';
import { cartCalculation } from '../Cart/CartState';

const OrderUI = ({ cart }) => {
    const { product, quantity } = cart;
    const { productName, price } = product;
    const total = cartCalculation(cart);
    return (
        <div>
            <tbody>
            <tr className="grid grid-cols-4">
                <td className="p-6 col-span-2">{productName}</td>
                <td className="mx-12 p-6">{price}</td>
                <td className="mx-12 p-6">{quantity}</td>
            </tr>
            </tbody>
        </div>
    );
};

export default OrderUI;