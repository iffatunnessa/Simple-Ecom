import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import DashBoard from '../../Dashboad/DashBoard';
import AdminConfirm from '../AdminConfirm/AdminConfirm';
import { isAdmin } from '../AdminState';
import Product from './Product';

const AllProducts = () => {
    const [itemList, setItemList] = useState([]);
    const admin = useRecoilValue(isAdmin);
    useEffect(() => {
        fetch(`http://localhost:5000/itemList`)
            .then(res => res.json())
            .then(data => setItemList(data))
    }, [])
    console.log(itemList);
    return (

        <>
            <AdminConfirm />
            {
                admin ?
                    <div className="grid grid-cols-4">
                        <DashBoard />
                        <div className="p-5 col-span-3">
                            <table>
                        <thead>
                            <tr className="grid grid-cols-4">
                                <th className="mt-6 col-span-2">Product</th>
                                <th className="mt-6">Price</th>
                                <th className="mt-6">Quantity</th>
                            </tr>
                        </thead>
                        {
                            itemList.length > 0 &&
                            itemList.map(product => <Product product={product} />)
                        }
                    </table>
                        </div>
                    </div>

                    : <div>
                        <p className="text-red-400 text-center">You're not an Admin</p>
                    </div>
            }
        </>
    );
};

export default AllProducts;