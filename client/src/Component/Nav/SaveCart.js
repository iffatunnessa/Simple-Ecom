import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserContext } from '../../App';
import { addCartInDatabase, cartState, updateCartInDb } from '../Cart/CartState';
import { oldUserState } from '../User/UserState';

const SaveCart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const cart = useRecoilValue(cartState);
    const email = loggedInUser.email;
    const user = useRecoilValue(oldUserState); 

    const saveToDatabase = (cart, email) => {
        if(user){
            updateCartInDb(cart, email);
        }else{
        addCartInDatabase(cart, email);
        }
    }

    return (
        <div className='fixed bottom-0 right-0'>
            {
                loggedInUser.email &&
                <>
                    <Link className="bg-purple-500 p-3 mx-3 rounded text-white hover:bg-purple-400" to="/cart">
                        View Cart
                    </Link>
                    <button onClick={() => saveToDatabase(cart, email)} className="bg-indigo-600 p-3 mx-3 rounded text-white hover:bg-indigo-500">
                        Save Cart
                    </button>
                </>
            }
        </div>
    );
};

export default SaveCart;