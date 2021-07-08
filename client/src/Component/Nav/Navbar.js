import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { useRecoilValue } from 'recoil';
import { cartState } from '../Cart/CartState';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { photoURL, email } = loggedInUser;
    const cart = useRecoilValue(cartState);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser('');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-3">
            <div className="flex items-center flex-shrink-0 text-white mr-6 px-6">
                <Link className="font-semibold text-xl tracking-tight" to="/home">Twurs Tech Shop</Link>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="items-center lg:flex-grow">
                    <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-indigo-300 px-3 py-1 rounded mr-4">
                        Home
                    </Link>
                    <div className="group inline-block relative">
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-indigo-300 px-3 py-1 rounded mr-4">
                            Product
                        </Link>
                        <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                            <Link className="bg-indigo-50 hover:bg-indigo-100 py-2 px-4 block whitespace-no-wrap" to={"/item/laptop"}>Laptop</Link>
                            <Link className="bg-indigo-50 hover:bg-indigo-100 py-2 px-4 block whitespace-no-wrap" to={"/item/phone"}>Phone</Link>
                            <Link className="bg-indigo-50 hover:bg-indigo-100 py-2 px-4 block whitespace-no-wrap" to={"/item/mouse"}>Mouse</Link>
                            <Link className="bg-indigo-50 hover:bg-indigo-100 py-2 px-4 block whitespace-no-wrap" to={"/item/keyboard"}>Keyboard</Link>
                            <Link className="bg-indigo-50 hover:bg-indigo-100 py-2 px-4 block whitespace-no-wrap" to={"/item/book"}>Book</Link>
                            <Link className="bg-indigo-50 hover:bg-indigo-100 py-2 px-4 block whitespace-no-wrap" to={"/item/coffee"}>Coffee</Link>
                        </ul>
                    </div>
                    <Link to="/addProduct" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-indigo-300 px-3 py-1 rounded mr-4">
                        Admin
                    </Link>
                </div>
                <div className="flex">
                    <div>
                        {
                            email &&
                            <Link to="/cart" className="text-xl px-4 py-6 text-white" >
                                <span class="animate-ping absolute inline-flex h-6 w-7 rounded-full bg-purple-400 opacity-75"></span>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span class="relative inline-flex rounded-full h-4 w-4 bg-red-400 text-xs">
                                    <span className='px-1'>{cart.length}</span>
                                </span>
                            </Link>
                        }
                    </div>
                    <div>
                        {
                            email ?
                                <img className="border-2 border-gry-200 user-photo h-10 w-10 rounded-full" src={photoURL} alt="" onClick={() => handleSignOut()} />
                                :
                                <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
