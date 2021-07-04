import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemIndividual from './ItemIndividual';

const Item = () => {
    const [item, setItem] = useState([]);
    const { category } = useParams();
    console.log(category);
    useEffect(() => {
        fetch(`http://localhost:5000/item/${category}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [category])
    console.log(item);
    return (
        <div className="grid grid-col-3 grid-row-3 gap-2">
            {
                item.map(items => <ItemIndividual items={items} />)
            }
        </div>
    );
};

export default Item;