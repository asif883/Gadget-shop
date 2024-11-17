import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const Overview = () => {
    const {user} = UseAuth()
    return (
        <div className='text-center w-full'>
            <h1 className="text-xl font-bold">User Email:{user?.email}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, deleniti?</p>
        </div>
    );
};

export default Overview;