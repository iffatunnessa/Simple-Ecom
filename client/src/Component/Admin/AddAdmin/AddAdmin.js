import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import DashBoard from '../../Dashboad/DashBoard';
import { isAdmin } from '../AdminState';

const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const admin = useRecoilValue(isAdmin);
    const onSubmit = adminEmail => {
        fetch("http://localhost:5000/addAdmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminEmail)
        })
            .then(res => console.log("adding admin response from server:", res))
    };
    return (
        <div className="grid grid-cols-4">
            <DashBoard />
            <div className="p-5 col-span-3">
                <form onSubmit={
                    handleSubmit(onSubmit)
                }>
                    <div className="p-2">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-price">
                            Add an email
                        </label>
                        <input className="border border-1 w-96 px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" placeholder="Add an Email" {...register("adminEmail")} />
                    </div>
                    <br />
                    <button className="bg-indigo-500 py-2 px-3 mx-2 text-white hover:bg-white hover:text-indigo-500 border rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;