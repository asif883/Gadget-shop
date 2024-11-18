import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation()

    if(loading){
        return <div className='flex items-center justify-center'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;