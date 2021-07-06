import React from 'react';

const ItemIndividual = ({ items }) => {
    const { productName, price, details, imageFile } = items;
    return (
        <div className=" max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-96 p-4 w-96 center object-cover md:w-96" src={`data:image/jpeg;base64,${imageFile.img}`} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{productName}</div>
                    <p className="mt-2 text-gray-500">{details}</p>
                    <h1 className="text-lg py-4 font-semibold">${price}</h1>
                    <button className="bg-indigo-500 py-2 px-3 text-white hover:bg-white hover:text-indigo-500 border rounded">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemIndividual;