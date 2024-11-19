import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth()
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;