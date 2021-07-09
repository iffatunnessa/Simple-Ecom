import React from 'react';
import { cartCalculation } from '../Cart/CartState';
import OrderIndividual from './OrderIndividual';

const OrderMiddle2 = ({ item }) => {
    const { cart } = item;
    const total = cartCalculation(cart);
    return (
        <>
            <div className="grid grid-cols-4">
                <div className='col-span-2 p-2'>
                    <table>
                        <thead>
                            <tr className="grid grid-cols-4">
                                <th className="mt-6 col-span-2">Product</th>
                                <th className="mt-6">Price</th>
                                <th className="mt-6">Quantity</th>
                            </tr>
                        </thead>
                        {
                            cart.length > 0 &&
                            cart.map(item => <OrderIndividual item={item} />)
                        }
                        <tfoot>
                            <tr className="grid grid-cols-4">
                                <td className="p-4 col-span-3 font-bold">Total</td>
                                <td>${total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        </>
    );
};

export default OrderMiddle2;