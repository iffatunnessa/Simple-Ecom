import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useRecoilValue } from 'recoil';
import DashBoard from '../../Dashboad/DashBoard';
import AdminConfirm from '../AdminConfirm/AdminConfirm';
import { isAdmin } from '../AdminState';

const AddProduct = () => {
    const admin = useRecoilValue(isAdmin);
    console.log(admin)
    const [imageFile, setImageFile] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = product => {
        const formData = new FormData();
        formData.append('productName', product.productName);
        formData.append('details', product.details);
        formData.append('price', product.price);
        formData.append('category', product.category);
        formData.append('image', imageFile);
        console.log(formData);

        fetch('https://boiling-crag-65640.herokuapp.com/addProduct', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

        window.location.reload();
    };
    const handleFileChange = e => {
        const file = e.target.files[0];
        setImageFile(file);
        console.log(file);
    }
    return (
        <>
            <AdminConfirm />
            {
                admin ?
                    <div className="grid grid-cols-4">
                        <DashBoard />
                        <div className="p-5 col-span-3">
                            <p className="text-green-400">You're an admin</p>
                            <form onSubmit={
                                handleSubmit(onSubmit)
                            }>
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2 p-2">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="productName">
                                            Product Name
                                        </label>
                                        <input className="border border-1 w-full px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" id="productName" type="text" placeholder="Product Name" {...register("productName")} required />
                                    </div>
                                    <div className="p-2">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-category">
                                            Category
                                        </label>
                                        <div class="relative">
                                            <select className="block w-full appearance-none border border-1 rounded shadow-md px-2 py-3 pr-8 rounded focus:outline-none focus:ring-indigo-600 focus:border-transparent" id="grid-category" {...register("category")}>
                                                <option>laptop</option>
                                                <option>phone</option>
                                                <option>mouse</option>
                                                <option>keyboard</option>
                                                <option>book</option>
                                                <option>coffee</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 p-2">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="details">
                                            Details
                                        </label>
                                        <input className="border w-full border-1 px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" id="details" placeholder="Details" {...register("details")} />
                                    </div>
                                    <div className="p-2">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="price">
                                            Price
                                        </label>
                                        <input className="border w-full border-1 px-2 py-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" id="price" placeholder="Price in USD" required {...register("price")} />
                                    </div>
                                    <div className="p-2">
                                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-image">
                                            Image
                                        </label>
                                        <input className="border border-1 w-full px-2 py-3  rounded shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" type="file" id="image" name='files' onChange={handleFileChange} required />
                                    </div>
                                    <br />
                                </div>
                                <button className="bg-indigo-500 py-2 px-3  m-3 text-white hover:bg-white hover:text-indigo-500 border rounded" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    : <div>
                        <p className="text-red-400 center">You're not an Admin</p>
                    </div>
            }
        </>
    );
}

export default AddProduct;
