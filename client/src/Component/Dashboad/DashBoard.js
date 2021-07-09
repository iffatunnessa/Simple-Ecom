import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlus,faTasks } from '@fortawesome/free-solid-svg-icons'

const DashBoard = () => {
    return (
        <div className="md:h-screen bg-indigo-100 p-4 ">
            <div className="grid grid-col-1">
                <Link to="/addProduct" className="hover:bg-indigo-200 p-2 h-10">
                    <span className="mx-5"><FontAwesomeIcon icon={faUserFriends} /></span>
                    Add Products </Link>
                <Link to="/addAdmin" className="hover:bg-indigo-200 p-2 h-10">
                    <span className="mx-5"><FontAwesomeIcon icon={faPlus} /></span>
                    Add An Admin
                </Link>
                <Link to="/allProducts" className="hover:bg-indigo-200 p-2 h-10">
                    <span className="mx-5"><FontAwesomeIcon icon={faTasks} /></span>
                    Products
                </Link>
            </div>
        </div>

    );
};

export default DashBoard;