import React, { useContext, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserContext } from '../../App';
import { cartCalculation, cartState, deleteCartFromDb } from '../Cart/CartState';
import Checkout from './Checkout';
import ItemCard from './ItemCard';
import { checkoutInDb, oldUserState } from './UserState';

const UserCart = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useRecoilState(cartState);
    const [newUserCart, setNewUserCart] = useState(false);
    const email = loggedInUser.email;
    const user = useRecoilValue(oldUserState);
    console.log(cart)
    useEffect(() => {
        if (user) {
            fetch(`https://boiling-crag-65640.herokuapp.com/getCart?email=${email}`)
                .then(res => res.json())
                .then(data => setCart(data[0].cart));
        }
    }, [email])

    const handleCheckout = () => {
        checkoutInDb(cart, email);
        setCart([]);
        document.getElementById('successMsg').innerText = "Your order is placed!"
        deleteCartFromDb();
    }
    const total = cartCalculation(cart);
    return (
        <>
            <div className="md:grid md:grid-cols-4">
                <div className='col-span-2 p-6'>
                    {
                        cart.length > 0 &&
                        cart.map(item => <ItemCard item={item} />)
                    }
                    <p className="text-lg text-green-600 p-6" id="successMsg"></p>
                </div>
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
                            cart.map(element => <Checkout element={element} />)
                        }
                        <tfoot>
                            <tr className="grid grid-cols-4">
                                <td className="p-4 col-span-3 font-bold">Total</td>
                                <td>${total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                    {
                        cart.length > 0 &&
                        <button className="bg-yellow-500 p-3 mx-3 rounded text-white hover:bg-yellow-400" onClick={handleCheckout}>Check Out</button>
                    }

                </div>
            </div>

        </>
    );
};

export default UserCart;