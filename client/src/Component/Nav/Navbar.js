import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                    <div class="group inline-block relative">
                        <Link  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-indigo-300 px-3 py-1 rounded mr-4">
                            Items
                        </Link>
                        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
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
                <div>
                    <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
