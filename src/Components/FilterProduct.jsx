import React from 'react';
import { MdOutlineFilterAlt} from "react-icons/md";

const FilterProduct = ({setCategory, setBrand , handleReset, uniqueBrand, uniqueCategory}) => {
   
    return (
        <div >
            <div className='flex items-center justify-center p-4'>
                <MdOutlineFilterAlt size={24}/>
                <p className='font-semibold text-xl'>Filter</p>
            </div>
            <div className='flex flex-col gap-2 items-center'>
            <select className="select w-48 border-2 border-orange-300" onChange={(e) => setCategory(e.target.value)}>   

                 <option value=''>Categories</option>

                 {
                    uniqueCategory?.map((category) =>
                        <option
                         key={category} 
                         value={category}
                         >
                            {category}
                         </option>  
                        
                    )
                 }
           </select>
            <select className="select w-48 border-2 border-orange-300" onChange={(e)=> setBrand(e.target.value)}>  
            <option value=''>Brand</option>
                 {
                    uniqueBrand.map((brand , idx) =>
                        <option key={idx} value={brand}>{brand}</option>  
                    )
                 }
           </select>
            <button onClick={handleReset} className='p-3 border rounded-md bg-[#FFA43A] text-white w-48'> Reset </button>
            </div>
        </div>
    );
};

export default FilterProduct;