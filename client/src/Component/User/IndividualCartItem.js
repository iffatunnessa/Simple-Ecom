import React from 'react';

const IndividualCartItem = ({ item }) => {
    const { product, quantity } = item;
    const { productName, price, details, imageFile } = product;
    console.log(product, quantity*price);
    // const increment = (prev) => {
    //     if (prev !== 101) {
    //         setQuantity(prev + 1);
    //     }
    // }
    // const decrement = (prev) => {
    //     if (prev !== 1) {
    //         setQuantity(prev - 1);
    //     }
    // }
    // const handleQuantity = (e) => {
    //     const count = e.target.value;
    //     if (count > -1 && count < 101) {
    //         setQuantityError('');
    //     }
    //     else {
    //         setQuantityError('Quantity of this product should be 0 to 100')
    //     }
    // }
    return (
        <>
            <div>
                <h1>{productName}</h1>
                <img className="h-96 p-4 w-96 center object-cover md:w-96" src={`data:image/jpeg;base64,${imageFile.img}`} alt="Man looking at item at a store" />
                <h3>{price}</h3>
                <button className="font-bold bg-gray-100 rounded h-8 w-8 mr-4 hover:bg-gray-300 " >+</button>
                <input className="border border-color-grey p-2 h-8 w-10 font-semibold" value={quantity} />
                <button className="font-bold bg-gray-100 rounded h-8 w-8 py-1 ml-4 px-2 hover:bg-gray-300" >-</button>
                <h3>{price*quantity}</h3>
            </div>
        </>
    );
};

export default IndividualCartItem;