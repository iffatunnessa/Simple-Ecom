import React from 'react';
import {useForm} from "react-hook-form";

const AddProduct = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div class="container mx-auto">
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
