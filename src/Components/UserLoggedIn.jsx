import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import img from '../assets/profile.webp'
import { Link } from 'react-router-dom';

const UserLoggedIn = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut=() =>{
        logOut()
        .then()
        .catch()
    }
    return (
        <div>
            
            {
                user?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" "><img className='w-10 h-10 border border-gray-600 p-1 rounded-full' src={img} alt="" /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <Link>Dashboard</Link>
                        <button onClick={handleLogOut} className='btn'>LogOut</button>
                    </ul>
                 </div> 
                :
                <>
                   <Link to='/login'>
                        <button className='border-2 border-[#FFA43A] rounded-xl mr-3 text-[#FFA43A] px-3 py-2 font-semibold'>Login</button>
                    </Link>
                    <Link to='/register'>
                        <button className='border-2 border-[#FFA43A] rounded-xl mr-3 text-[#FFA43A] px-3 py-2 font-semibold'>Register</button>
                    </Link>
                </>
            }
        </div>
    );
};

export default UserLoggedIn;