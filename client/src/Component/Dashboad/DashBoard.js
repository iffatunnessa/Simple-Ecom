import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="h-screen bg-indigo-100 p-4  ">
            <div className ="grid grid-col-1">
            <Link to="/addProduct" className="hover:bg-indigo-500 p-2 h-10">Add Products</Link>
            <Link  to="/addAdmin" className="hover:bg-indigo-500 p-2 h-10">Add An Admin</Link>
            <Link className="hover:bg-indigo-500 p-2 h-10">Add Admin</Link>
            </div>
        </div>

    );
};

export default DashBoard;