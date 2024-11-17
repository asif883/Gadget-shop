import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../Components/DashboardComponents/Sidebar';
import Overview from '../Components/DashboardComponents/Overview';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
             <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
           </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
         <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
                <Sidebar></Sidebar>
            </ul>
        </div>
  </div>












        // <div className='grid grid-cols-12'>
        //     {/* left side */}
        //     <div className='col-span-2'>
        //         <Sidebar></Sidebar>
        //     </div>

                   
        //     <div className='col-span-10'>
        //         <Outlet></Outlet>
        //     </div>
        // </div>
    );
};

export default Dashboard;