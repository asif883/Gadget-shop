import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
        <li>
          <Link to='dashboard/overview'>Overview</Link>
        </li>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link>My Product</Link>
        </li>
        <li>
            <Link>Logout</Link>
        </li>
        </>
    );
};

export default Sidebar;