import React from 'react';
import { useRecoilState } from 'recoil';
import { cartState } from '../Cart/CartState';

const Checkout = ({ element }) => {
    const { product, quantity } = element;
    const { productName, price } = product;
    return (
        <tbody>
            <tr className="grid grid-cols-4">
                <td className="p-6 col-span-2">{productName}</td>
                <td className="mx-12 p-6">{price}</td>
                <td className="mx-12 p-6">{quantity}</td>
            </tr>
        </tbody>
    );
};

export default Checkout;