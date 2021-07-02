import React, { useEffect } from 'react';
import {useForm} from "react-hook-form";

const AddProduct = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = product => {
        fetch("http://localhost:5000/addProduct", {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        // .then(res => res.JSON())
        .then(res => console.log(res))
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={
                handleSubmit(onSubmit)
            }>
                <input className="box-border h-10 w-40 p-4 border-2" {...register("productName")}/>
                <input className="box-border h-10 w-40 p-4 border-2" {...register("category")}/>
                <input className="box-border h-10 w-40 p-4 border-2" {...register("price")}/>
                <button className="bg-red-500 p-2 text-white hover:bg-white hover:text-red-500 border rounded" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProduct;
