import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemIndividual from './ItemIndividual';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Item = () => {
    const [item, setItem] = useState([]);
    const { category } = useParams();
    const [isCart, setCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:5000/item/${category}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [category])
    return (
        <div className="grid grid-col-3 grid-row-3 gap-2">
            {
                item.length === 0 && <div className="my-40 text-center">
                    <svg className="animate-spin h-10 w-10 mx-44 text-indigo-400" viewBox="0 0 24 24">
                        <FontAwesomeIcon icon={faCircleNotch} />
                    </svg>
                    loading
                </div>
            }
            {

                item.map(item => <ItemIndividual item={item} isCart={isCart} quantityCart={quantity} />)
            }
        </div>
    );
};

export default Item;