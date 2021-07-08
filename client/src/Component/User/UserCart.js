import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartCalculation, cartState } from '../Cart/CartState';
import ItemCard from './ItemCard';

const UserCart = () => {
    const cart = useRecoilValue(cartState);
    const total = cartCalculation(cart);
    console.log(total);
    return (
        <>
            <div className="grid grid-cols-3">
                <div className='col-span-2 p-6'>
                    {
                        cart.map(item => <ItemCard item={item} />)
                    }
                </div>
                <div className=''>${total.toFixed(3)}</div>
            </div>

        </>
    );
};

export default UserCart;