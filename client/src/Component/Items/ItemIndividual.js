import React from 'react';

const ItemIndividual = ({ items }) => {
    const { productName, price, details, imageFile } = items;
    return (
        <div class="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-96 p-4 w-96 center object-cover md:w-96" src={`data:image/jpeg;base64,${imageFile.img}`} alt="Man looking at item at a store" />
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{productName}</div>
                    <p class="mt-2 text-gray-500">{details}</p>
                    <h1>${price}</h1>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemIndividual;