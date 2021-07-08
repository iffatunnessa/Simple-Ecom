import React, { useContext, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserContext } from '../../App';
import { cartState } from '../Cart/CartState';
import { oldUserState } from '../User/UserState';
import ItemIndividual from './ItemIndividual';

const ItemChecker = ({ item, isCart, quantity }) => {
    const [user, setUser] = useRecoilState(oldUserState);
    const { productName, price, details, imageFile, _id } = item;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useRecoilState(cartState);
    const [showed, setShowed] = useState(false);
    const email = loggedInUser.email;


    // if (user) {
    //     cart.forEach(element => {
    //         console.log(_id)
    //         if (element.product._id === _id) {
    //             setShowed(true)
    //         }
    //     });
    // };
    return (
        <div>
            {
                !showed &&
                <ItemIndividual item={item} isCart={isCart} quantityCart={quantity} />
            }
        </div>
    );
};

export default ItemChecker;