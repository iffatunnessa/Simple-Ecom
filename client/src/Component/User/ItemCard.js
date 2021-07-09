import React, { useState } from 'react';
import ItemIndividual from '../Items/ItemIndividual';

const ItemCard = ({ item }) => {
    const { product, quantity } = item;
    const [isCart, setIsCart] = useState(true);
    return (
        <div>
            {
                <ItemIndividual item={product} isCart={isCart} quantityCart={quantity} />
            }
        </div>
    );
};

export default ItemCard;