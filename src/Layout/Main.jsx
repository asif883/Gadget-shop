import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';




const Main = () => {
    return (
        <div>
            <div className=' bg-orange-50'>
             <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;