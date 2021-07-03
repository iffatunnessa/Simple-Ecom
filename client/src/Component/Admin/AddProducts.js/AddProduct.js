import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import DashBoard from '../../Dashboad/DashBoard';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = product => {
        fetch("http://localhost:5000/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => console.log("adding product response from server:",res))
    };

    return (
        <div className="grid grid-cols-4">
            <DashBoard />
            <div className="p-5 col-span-3">
                <form onSubmit={
                    handleSubmit(onSubmit)
                }>
                    <input className="border border-transparent h-10 w-96 p-4 m-3  rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Product Name" {...register("productName")} />
                    <input className="border border-transparent h-10 w-44 p-4 m-3  rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Category" {...register("category")} />
                    <br />
                    <input className="border border-transparent h-10 w-96 p-4 m-3  rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Details" {...register("details")} />

                    <input className="border border-transparent h-10 w-44 p-4 m-3  rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent " placeholder="Price in USD" {...register("price")} />
                    <br />
                    <button className="bg-indigo-500 p-2 m-3  text-white hover:bg-white hover:text-indigo-500 border rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
