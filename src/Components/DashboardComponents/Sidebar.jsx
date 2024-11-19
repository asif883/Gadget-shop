import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useUserData from '../../Hooks/useUserData';
import { GrOverview } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineInventory2 } from "react-icons/md";

const sellerRoutes =[
    {
        id: 1,
        title: "Add Product",
        route: "dashboard/add-product",
    },
    {
        id: 2,
        title: "My Product",
        route: "dashboard/my-product",
    }
]
const Sidebar = () => {  
    const data = useUserData()
    const {role} = data
    console.log(role);
    return (
        <div className='space-y-2'>
      
        <li className='border rounded-xl border-orange-200 font-semibold'>       
          <Link to='dashboard/overview'>Overview</Link>
        </li>
        <li className='border rounded-xl border-orange-200 font-semibold'>
            <Link to='/'>Home</Link>
        </li>
        {
             role=== "seller" && sellerRoutes.map((route)=>
                <li className='border rounded-xl border-orange-200 font-semibold ' key={route.id}>
                    <Link to={route.route}>{route.title}</Link>
                </li>
            )
        }
        </div>
    );
};

export default Sidebar;