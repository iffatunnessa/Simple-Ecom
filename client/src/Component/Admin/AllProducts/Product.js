import React from 'react';

const Product = ({product}) => {
    const {availableQuantity, productName, price, _id, imageFlie} = product;
    console.log(product)
    const quantityUpdate =(e)=>{
        console.log(availableQuantity, e.target.value);
        const newValue = e.target.value;
        fetch(`https://boiling-crag-65640.herokuapp.com/updateItemList/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newValue })
          })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <tbody>
        <tr className="grid grid-cols-4">
            <td className="md:p-6 py-4 col-span-2">{productName}</td>
            <td className="md:mx-12 py-4 text-center md:p-6">{price}</td>
            <td className="md:mx-12 py-4 text-center md:p-6">{availableQuantity}<input className="w-12 mx-2 text-sm" onChange={quantityUpdate} placeholder="change"/></td>
        </tr>
    </tbody>
    );
};

export default Product;