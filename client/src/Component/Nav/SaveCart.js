import React from 'react';
import { Link } from 'react-router-dom';

const SaveCart = () => {
    return (
        <div className='fixed bottom-0 right-0'>
            <Link className="bg-purple-500 p-3 mx-3 rounded text-white hover:bg-purple-400" to="/cart">
                View Cart
            </Link>
            <button className="bg-indigo-600 p-3 mx-3 rounded text-white hover:bg-indigo-500">
                Save Cart
            </button>
        </div>
    );
};

export default SaveCart;