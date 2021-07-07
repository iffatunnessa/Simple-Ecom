import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartState, addToCart } from '../Cart/CartState';

const ItemIndividual = ({ items }) => {
    const { productName, price, details, imageFile} = items;
    const [cart, setCart] = useRecoilState(cartState);
    const [quantity, setQuantity] = useState(1);
    const [quantityError, setQuantityError] = useState('');

    const handleAddToCart = (product) => {
        const newCart = addToCart(cart, product, quantity); 
        setCart(newCart);
        console.log(newCart)
      }
    const increment = (prev) => {
        if (prev !== 101) {
            setQuantity(prev + 1);
        }
    }
    const decrement = (prev) => {
        if (prev !== 1) {
            setQuantity(prev - 1);
        }
    }
    const handleQuantity = (e) => {
        const count = e.target.value;
        if (count > -1 && count < 101) {
            setQuantityError('');
        }
        else {
            setQuantityError('Quantity of this product should be 0 to 100')
        }
    }
    return (
        <div className=" max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-96 p-4 w-96 center object-cover md:w-96" src={`data:image/jpeg;base64,${imageFile.img}`} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{productName}</div>
                    <p className="mt-2 text-gray-500">{details}</p>
                    <h1 className="text-lg py-4 font-semibold">${price}</h1>
                    <div>
                        <button className="font-bold bg-gray-100 rounded h-8 w-8 mr-4 hover:bg-gray-300 " onClick={() => increment(quantity)}>+</button>
                        <input className="border border-color-grey p-2 h-8 w-10 font-semibold" onChange={() => handleQuantity} value={quantity} />
                        <button className="font-bold bg-gray-100 rounded h-8 w-8 py-1 ml-4 px-2 hover:bg-gray-300 " onClick={() => decrement(quantity)}>-</button>
                    </div>
                    <div >
                        <p className="p-4 text-red-500">{quantityError}</p>
                    </div>
                    <button className="bg-indigo-500 py-2 px-3 text-white hover:bg-indigo-100 hover:text-indigo-500 border rounded" onClick={()=>handleAddToCart(items)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemIndividual;