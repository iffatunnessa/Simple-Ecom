import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartCalculation, cartState } from '../Cart/CartState';
import IndividualCartItem from './IndividualCartItem';

const UserCart = () => {
    const cart = useRecoilValue(cartState);
    console.log(cart);
    cartCalculation(cart);
    return (
        <>
            {
                cart.map(item => <IndividualCartItem item={item} />)
            }
        </>
    );
};

export default UserCart;