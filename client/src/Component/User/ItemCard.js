import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import ItemIndividual from '../Items/ItemIndividual';
import { isOrder } from './UserState';

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