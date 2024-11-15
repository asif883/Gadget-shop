import React, { useState } from 'react';
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] =useState(false)
    const[password, setPassword] =useState('');

    const handleChange= (e)=>{
        setPassword(e.target.value)
    }

    const handleLogin = () =>{

    }
    return (
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        <div className="flex-1">
          <img className="h-4/6 w-4/5" src="https://i.ibb.co/LJ70cNL/Tablet-login-cuate.png" alt="" />
      </div>  
      <div className="max-w-md h-4/6 mt-16 shadow-xl rounded-lg flex-1">
          <div className="text-center">
              <h1 className="text-4xl text-[#5BBC2E] font-bold">Login Now</h1>
          </div>
      <form onSubmit={handleLogin}  className="card-body">
              <div className="form-control">
              <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered border border-green-300" required />
              </div>
              <div className="form-control relative">
                  <label className="label">
                      <span className=" label-text text-xl font-semibold">Password</span>
                  </label>
                
                 <input type={showPassword? "text": "password"} 
                      name='password' 
                      placeholder="password" 
                      onChange={handleChange}
                      value={password}
                      className= "input input-bordered border border-green-300" required />
                
                      <span  className="absolute right-3 bottom-4 text-xl" onClick={()=>setShowPassword(!showPassword)}>
                          {
                              showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                          }
                      </span>
                 
                  </div>
             
              <div className="form-control mt-6">
              <button className="w-full border-2 mr-4  px-4  rounded-lg py-3 bg-[#5BBC2E] text-white  font-semibold">Login</button>
              </div>
              
              <label className="label">
                  <p className="label-text-alt text-lg ">New here? Please <Link to='/register' className="underline text-[#5BBC2E] font-medium">Register</Link></p>
              </label>
      </form>
      {/* <div className="">
                    <h1 className="text-center font-semibold">Or, Login with</h1>
                  <div className="text-center mt-6 pb-8">
                      <button onClick={handleGoogleLogin} className="mr-3 border border-green-300 p-1 rounded-xl">
                          <FcGoogle className="w-10 h-10" />
                      </button>
                      <button  onClick={handleGithubLogin} className="mr-3 border border-green-300  p-1 rounded-xl">
                          <FaGithub className="w-10 h-10"/>
                      </button>
                     
                  </div>
              </div> */}
      </div>
  </div>
    );
};

export default Login;