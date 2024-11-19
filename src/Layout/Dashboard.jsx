import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/DashboardComponents/Sidebar';



const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-12">
                <Outlet></Outlet>
             <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
           </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
         <ul className="menu text-center bg-gray-100 min-h-full w-80 p-8">
            {/* Sidebar content here */}
                <Sidebar></Sidebar>
            </ul>
        </div>
  </div>

    );
};

export default Dashboard;