import React, { useContext, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserContext } from '../../App';
import ItemCard from './ItemCard';
import OrderMiddleManage from './OrderMiddleManage';
import { isOrder, oldUserState } from './UserState';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [order, setIsOrder] = useRecoilState(isOrder);
    const user = useRecoilValue(oldUserState);
    const email = loggedInUser.email;
    console.log(email);
    useEffect(() => {
        if (user) {
            fetch(`https://boiling-crag-65640.herokuapp.com/getCheckout?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                    setIsOrder(true);
                });
        }
    }, [email])
    console.log('orders',orders)
    return (
        <div>
            {
                orders.map(item => <OrderMiddleManage item={orders} />)
            }
        </div>
    );
};

export default Orders;