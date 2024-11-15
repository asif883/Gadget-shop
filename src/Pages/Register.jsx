import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault()
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email ,password);

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })

    }
    return (
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
            
        <div className="flex-1">
            <img src="https://i.ibb.co/qyVw6GG/Sign-up-rafiki.png" alt="" />
        </div>
        
        <div className="text-center max-w-lg mt-16 shadow-xl rounded-lg pb-8 flex-1">
            <h1 className="text-4xl text-[#FFA43A] font-bold">Register Now</h1>


            <form onSubmit={handleRegister}  className="card-body">
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                            
                        <input type="text" name="Name"  placeholder="Enter Your Name"className="input input-bordered border border-orange-300" required />
                       
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered border border-orange-300" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className=" label-text text-xl font-semibold">Password</span>
                    </label>
                  
                   <input type='password'
                        name='password' 
                        placeholder="password" 
                        className= "input input-bordered border border-orange-300" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Confirm Password</span>
                        </label>
                        <input type='password' 
                        name='confirm-password' 
                        placeholder="confirm-password" 
                        className= "input input-bordered border border-orange-300" required />            
                    </div>
                    
                    <div className="form-control mt-6">
                    <button className=" w-full border-2 mr-4  px-4  rounded-lg py-3 bg-[#FFA43A] text-white  font-semibold">Register</button>
                    </div>
                    <label className="label mt-4">
                        <a className="label-text-alt text-lg">Already have an account? Please <Link to='/login' className="underline text-orange-600">Login</Link></a>
                    </label>
             </form>
        
        </div>
        
    </div>
    );
};

export default Register;