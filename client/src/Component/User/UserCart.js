import React, { useContext, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserContext } from '../../App';
import { cartCalculation, cartState } from '../Cart/CartState';
import ItemCard from './ItemCard';
import { oldUserState } from './UserState';

const UserCart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useRecoilState(cartState);
    const [newUserCart, setNewUserCart] = useState(false);
    const email = loggedInUser.email;
    const user = useRecoilValue(oldUserState);
    useEffect(() => {
        if (user){
        fetch(`http://localhost:5000/getCart?email=${email}`)
           .then(res => res.json())
            .then(data => setCart(data[0].cart));
        }
    }, [email])

    const total = cartCalculation(cart);
    return (
        <>
            <div className="grid grid-cols-3">
                <div className='col-span-2 p-6'>
                    {
                        cart.map(item => <ItemCard item={item} />)
                    }
                </div>
                <div className=''>${total.toFixed(2)}</div>
            </div>

        </>
    );
};

export default UserCart;