import React from 'react';
import { useForm } from 'react-hook-form';

import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()

    const {user} =UseAuth()
   
    const handleAddProduct =(data) =>{
        const title = data.title
        const brand = data.brand
        const price = parseFloat(data.price)
        const stock = parseFloat(data.stock)
        const imageURL = data. imageURL
        const category= data.category
        const sellerEmail = user?.email
        const description = data.description

        const productInfo ={title, brand, price, stock, imageURL, category, sellerEmail, description}

        const token = localStorage.getItem('access-token')

        axios.post('http://localhost:3000/add-products', productInfo, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  }); 
            }
            
        })
    }
    return (
        <div>
            {/* <SectionTitle
                heading={'Add Product'}
            ></SectionTitle> */}
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className='flex items-center gap-3'>
              <div className="flex-1">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Product title</span>
                        </label>
                            
                        <input type="text"  placeholder="Enter Your Product title"className="input input-bordered border border-orange-300 w-full" {...register('title' ,{required: true})} />
                        {
                            errors.title && ( 
                                <p className='text-red-500 text-sm font-light'>Title is required</p>
                            )
                        }
                       
                </div>
                 <div className="flex-1">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Brand</span>
                        </label>
                            
                        <input type="text"  placeholder="Enter Brand Name"className="input input-bordered border border-orange-300 w-full" {...register('brand' ,{required: true})} />
                        {
                            errors.brand && ( 
                                <p className='text-red-500 text-sm font-light'>Brand is required</p>
                            )
                        }
                       
                </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className="flex-1">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Price</span>
                        </label>
                            
                        <input type="text"  placeholder="Enter  Product price"className="input input-bordered border border-orange-300 w-full" {...register('price' ,{required: true})} />
                        {
                            errors.price && ( 
                                <p className='text-red-500 text-sm font-light'>Title is required</p>
                            )
                        }
                       
                </div>
                 <div className="flex-1">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Stock</span>
                        </label>
                            
                        <input type="text"  placeholder="Stock"className="input input-bordered border border-orange-300 w-full" {...register('stock' ,{required: true})} />
                        {
                            errors.stock && ( 
                                <p className='text-red-500 text-sm font-light'>Brand is required</p>
                            )
                        }
                       
                </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className="flex-1">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Image URL</span>
                        </label>
                            
                        <input type="text"  placeholder="Enter Image URL"className="input input-bordered border border-orange-300 w-full" {...register('imageURL' ,{required: true})} />
                        {
                            errors.imageURL && ( 
                                <p className='text-red-500 text-sm font-light'>ImageURL is required</p>
                            )
                        }
                       
                </div>
                 <div className="flex-1">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Category</span>
                        </label>
                            
                        <select className="select w-full input input-bordered border border-orange-300" 
                        {...register('category', {required: true})} 
                        > <option disabled >Choose one</option>
                            <option value='Smart Phone'>Smart Phone</option>
                            <option value='Computer'>Computer</option>
                            <option value='Camera'>Camera</option>
                            <option value='Television'>Television</option>
                          </select>
                            {
                                errors.category &&(
                                    <p className='text-red-500 text-sm font-light'>You have to select a category</p>
                                )
                            }
                       
                </div>
            </div>
            <div className="">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Description</span>
                        </label>
                        <textarea
                            placeholder="Description"
                            className="textarea textarea-bordered textarea-lg w-full border-orange-300" {...register('description', {required: true})}></textarea>
                        
                            {
                                errors.description &&(
                                    <p className='text-red-500 text-sm font-light'>Write a description</p>
                                )
                            }
                       
                </div>

                <button type='submit' className='w-full border-2 mt-4  px-4  rounded-lg py-3 bg-[#FFA43A] text-white  font-semibold'>Add Product</button>
              
               
          </form>
        </div>
    );
};

export default AddProduct;