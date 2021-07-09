import React from 'react';
import OrderMiddle2 from './OrderMiddle2';

const OrderMiddleManage = ({ item }) => {
    console.log("m1", item)
    return (
        <div>
            <div className='col-span-2 p-2'>
                <table>
                    {
                        item.map(item => <OrderMiddle2 item={item} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default OrderMiddleManage;