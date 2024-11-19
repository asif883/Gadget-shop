import React from 'react';

const SortOptions = ({setSort}) => {
    return (
        <div>
            <select className="select w-48 border-2 border-orange-300" onChange={(e) => setSort(e.target.value)}>          
                <option value='decs'>Price Low to High</option>
                <option value='asc'>Price High to Low</option>
           </select>
        </div>
    );
};

export default SortOptions;