import React, { useContext, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, addToCart, updateCart, deleteFromCart } from '../Cart/CartState';
import { UserContext } from '../../App';
import { oldUserState } from '../User/UserState';

const ItemIndividual = ({ item, isCart, quantityCart }) => {
    const user = useRecoilValue(oldUserState);
    const { productName, price, details, imageFile, availableQuantity, _id } = item;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [cart, setCart] = useRecoilState(cartState);
    const [quantityError, setQuantityError] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [quantityFromCart, setQuantityFromCart] = useState(quantityCart);
    const [showed, setShowed] = useState(false);
    const email = loggedInUser.email;

    const handleAddToCart = (product) => {
        const { productName, _id, price } = product;
        const productDetails = {
            _id: _id,
            productName: productName,
            price: price
        }
        const newCart = addToCart(cart, productDetails, quantity, email);
        setCart(newCart);
        console.log(newCart)
    }
    const removeFromCart = (product) => {
        const newCart = deleteFromCart(cart, product);
        setCart(newCart);
    }
    const increment = (prev) => {
        if (prev !== 101) {
            setQuantity(prev + 1);
            setQuantityFromCart(prev + 1);
        }
    }
    const decrement = (prev) => {
        if (prev !== 1) {
            setQuantity(prev - 1);
            setQuantityFromCart(prev - 1);
        }
    }
    const handleQuantity = (e) => {
        const count = e.target.value;
        if (quantityCart) {
            document.getElementById(_id).value = quantityCart;
        } else {
            document.getElementById(_id).value = quantity;
        }
        if (count > -1 && count < 101) {
            setQuantityError('');
        }
        else {
            setQuantityError('Quantity of this product should be 0 to 100')
        }
    }
    const UpdateCart = (product) => {
        const newCart = updateCart(cart, product, quantityFromCart);
        setCart(newCart);
    }

    return (
        <div className=" max-w-4xl mx-auto my-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1">
            <div className="md:flex">
                {!isCart &&
                    <div className="md:flex-shrink-0">

                        <img className="h-44 p-4 w-44 center object-cover md:w-44" src={`data:image/jpeg;base64,${imageFile.img}`} alt="Product" />
                    </div>
                }
                <div className="p-5">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{productName}</div>
                    {
                        !isCart &&
                        <p className="mt-2 text-gray-500">{details}</p>
                    }
                    <h1 className="text-lg py-4 font-semibold">${price}</h1>
                    {
                        loggedInUser.email &&
                        <div>
                            <button className="font-bold bg-gray-100 rounded h-8 w-8 mr-4 hover:bg-gray-300 " onClick={() => increment(isCart ? quantityFromCart : quantity)}>+</button>
                            <input type='text' className="border border-color-grey p-2 h-8 w-10 font-semibold" id={_id} onChange={() => handleQuantity}
                                value={isCart ? quantityFromCart : quantity} />
                            <button className="font-bold bg-gray-100 rounded h-8 w-8 py-1 ml-4 px-2 hover:bg-gray-300 " onClick={() => decrement(isCart ? quantityFromCart : quantity)}>-</button>
                            {
                                availableQuantity > 0 ? <p className="py-6 text-green-500">{availableQuantity} products are available.</p>
                            : <p className="py-6 text-yellow-500 font-bold">Currently not available!</p>
                            }
                            
                        </div>
                    }

                    <div >
                        <p className="p-4 text-red-500">{quantityError}</p>
                    </div>
                    {
                        isCart ?
                            <button className="bg-indigo-500 py-2 px-3 text-white hover:bg-indigo-100 hover:text-indigo-500 border rounded" onClick={() => UpdateCart(item)}>
                                Update
                            </button>
                            : loggedInUser.email &&
                            <button className="bg-indigo-500 py-2 px-3 text-white hover:bg-indigo-100 hover:text-indigo-500 border rounded" onClick={() => handleAddToCart(item)}>
                                Add to Cart
                            </button>
                    }
                    {
                        isCart &&
                        <button className="bg-indigo-400 py-2 px-3 ml-2 text-white hover:bg-indigo-100 hover:text-indigo-500 border rounded" onClick={() => removeFromCart(item)}>
                            Remove
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ItemIndividual;