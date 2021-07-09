import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useRecoilValue } from 'recoil';
import { isAdmin } from '../Admin/AdminState';

const DashBoard = () => {
    return (
        <div className="h-screen bg-indigo-100 p-4  ">
            <div className ="grid grid-col-1">
            <Link to="/addProduct" className="hover:bg-indigo-200 p-2 h-10"> 
            <span className="mx-5"><FontAwesomeIcon icon={faUserFriends} /></span>
            Add Products </Link>
            <Link  to="/addAdmin" className="hover:bg-indigo-200 p-2 h-10">
                <span className="mx-5"><FontAwesomeIcon icon={faPlus} /></span>Add An Admin</Link>
            </div>
        </div>

    );
};

export default DashBoard;