import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import useUserData from '../../Hooks/useUserData';

const Overview = () => {
    const userData = useUserData()
    const {email, role} =userData
    return (
        <div className='text-center w-full'>
            <h1 className="text-xl font-bold">User Email:{email}</h1>
            <p className="text-xl font-bold">Role:{role}</p>
        </div>
    );
};

export default Overview;