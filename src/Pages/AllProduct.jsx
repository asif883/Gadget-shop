import React, { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import SortOptions from '../Components/SortOptions';
import FilterProduct from '../Components/FilterProduct';
import Loading from '../Components/Loading';
import axios from 'axios';


const AllProduct = () => {
    const [products , setProduct] = useState([]);
    const [loading , setLoading] = useState(true)

    const [Search , setSearch] =useState('')
    const [brand , setBrand] =useState('')
    const [category , setCategory] =useState('')
    const [sort , setSort] =useState('asc')

    const [ uniqueBrand , setUniqueBrand] = useState([])
    const [ uniqueCategory , setUniqueCategory] = useState([])
    console.log(brand);
     
    useEffect(()=>{
        setLoading(true)
        const fetch =async()=>{
            axios.get(`http://localhost:3000/all-products?title=${Search}&sort=${sort}&brand=${brand}&category=${category}`)
            .then(res =>{
                console.log(res.data);
                setProduct(res.data.products)
                setUniqueCategory(res.data.categories)
                setUniqueBrand(res.data.brands)
                setLoading(false)
            })
            
        }
       
        fetch()
    },[Search , sort, brand, category ])

    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.search.value)
        e.target.search.value= ''
    }

    const handleReset = ()=>{
        setBrand('')
        setCategory('')
        setSearch('')
        setSort('')
        window.location.reload()
    }
    
  
    return (
        <div className='container mx-auto'>
            <div className='text-center my-8'>
                <h1 className="text-3xl font-bold">ALL Product</h1>
            </div>
            <div className='flex items-center justify-between mb-6'> 
                <SearchBar handleSearch={handleSearch}/>
                <SortOptions setSort={setSort}/>
            </div>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-orange-50 h-full min-h-screen rounded-t-lg'>
                       <FilterProduct 
                       setBrand={setBrand}
                       setCategory={setCategory}
                       handleReset={handleReset}
                       uniqueBrand={uniqueBrand}
                       uniqueCategory={uniqueCategory}
                       >
                        </FilterProduct> 
                </div>
                <div className='col-span-10 '>

                        {
                            loading ?( <Loading></Loading>)
                            :( <>
                            {
                              products.length === 0 ? 
                              (<div>
                                  <h1 className="text-2xl text-red-500 font-bold text-center">No product found</h1>
                              </div>) :

                              (<div className='grid grid-cols-3 gap-5 p-8'>
                         {
                            products.map((product, idx)=>
                            (
                            <div key={idx}>
                               <div className="card bg-base-100 border border-orange-300  shadow-xl">
                                <figure>
                                 <img className='h-[200px]'
                                     src={product?.imageURL}
                                     alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{product?.title}</h2>
                                        <p className='text-lg font-semibold'>Price: ${product?.price}</p>
                                        <div className="card-actions justify-between">
                                        <button className="border-2 border-[#FFA43A] rounded-xl  text-[#FFA43A] px-2 py-2 font-semibold">Add to Cart</button>
                                        <button className="border-2 border-[#FFA43A] rounded-xl  text-[#FFA43A] px-2 py-2 font-semibold">Add to wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                              </div>) 
                            }
                                </>)
                        }
                    
                        
                </div>
            </div>
        </div>
    );
};

export default AllProduct;