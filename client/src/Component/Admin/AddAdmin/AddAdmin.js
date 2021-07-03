import React from 'react';
import { useForm } from 'react-hook-form';
import DashBoard from '../../Dashboad/DashBoard';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = adminEmail => {
        fetch("http://localhost:5000/addAdmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminEmail)
        })
            .then(res => console.log("adding admin response from server:",res))
    };
    return (
        <div  className="grid grid-cols-4">
        <DashBoard />
        <div className="p-5 col-span-3">
                <form onSubmit={
                    handleSubmit(onSubmit)
                }>
                    <input className="border border-transparent h-10 w-44 p-4 m-3  rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Add an Email" {...register("adminEmail")} />
                    <br />
                    <button className="bg-indigo-500 p-2 m-3  text-white hover:bg-white hover:text-indigo-500 border rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;