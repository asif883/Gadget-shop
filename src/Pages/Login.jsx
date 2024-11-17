import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';
import img from '../assets/Login-cuate.svg'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const {logIn ,googleLogin } = UseAuth();

    const {
        register,
        handleSubmit,
        formState:{errors}

    } = useForm()

    const handleGoogleLogin =()=>{
        googleLogin()
        .then()
        .catch()
    }

    const handleLogin = (data) =>{
        logIn(data.email, data.password)
        .then(res =>{
            console.log(res);
            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              navigate(location?.state ? location.state : '/');
        })
        

        .catch (error =>{
            console.error( error)

            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })
        
    }
    return (
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
        <div className="flex-1">
          <img className="h-4/6 w-4/5" src={img} alt="" />
      </div>  
      <div className="max-w-md h-4/6 mt-16 shadow-xl rounded-lg flex-1">
          <div className="text-center">
              <h1 className="text-4xl text-[#FFA43A] font-bold">Login Now</h1>
          </div>


      <form onSubmit={handleSubmit(handleLogin)}  className="card-body">
              <div className="form-control">
              <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered border border-orange-300" {...register("email" ,{required: true})} />
              {
                errors.email && (
                    <p className='text-red-500 text-sm font-light'> Email is required</p>
                )
              }
              </div>

              <div className="form-control relative">
                  <label className="label">
                      <span className=" label-text text-xl font-semibold">Password</span>
                  </label>
                
                 <input type="password"
                      name='password' 
                      placeholder="password" 
                      className= "input input-bordered border border-orange-300" {...register("password", 
                        {
                          required: true,
                          minLength:6
                        })} />
                        {
                            errors.password?.type ==="required" &&(
                                <p className='text-red-500 text-sm font-light'>Password is required</p>
                            )
                        }
                        {
                            errors.password?.type ==="minLength" &&(
                                <p className='text-red-500 text-sm font-light'>Password must be have six characters</p>
                            )
                        }
                
                      
                 
                  </div>
             
              <div className="form-control mt-6">
              <button type='submit' className="w-full border-2 mr-4  px-4  rounded-lg py-3 bg-[#FFA43A] text-white  font-semibold">Login</button>
              </div>
              
              <label className="label">
                  <p className="label-text-alt text-lg ">New here? Please <Link to='/register' className="underline text-[#FFA43A] font-medium">Register</Link></p>
              </label>
      </form>
      <div className="">
                    <h1 className="text-center font-semibold">Or, Login with</h1>
                  <div className="text-center mt-6 pb-8">
                      <button onClick={handleGoogleLogin} className="mr-3 border border-orange-300 p-1 rounded-xl">
                          <FcGoogle className="w-10 h-10" />
                      </button>
                      <button className="mr-3 border border-orange-300  p-1 rounded-xl">
                          <FaGithub className="w-10 h-10"/>
                      </button>
                     
                  </div>
              </div>
      </div>
  </div>
    );
};

export default Login;