import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
       if(formData.userName && formData.confirmPassword && formData.password && formData.email){
        
         if(formData.password==formData.confirmPassword){

          await axios.post(
            import.meta.env.VITE_SERVER_URL +'/user/signup',
                      formData  
                   )
                   .then((response)=>{ toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 2000,});
                      navigate("/login");
                    })
                   .catch ((error)=>{
                  console.log("Error occurred:", error)}
                   )
                  }
                  else{
                    { toast.error("password and confirmPassword not equal", {
                      position: "bottom-right",
                      
                      });}
                  }
                }
                  else{
                    { toast.error("Please enter required fields", {
                      position: "bottom-right",
                      
                      });}
                  }
         };

  return (
    <>
    <div className=' bg-slate-950  min-h-screen  flex justify-center m-2'>
    <div className='absolute mt-16 text-gray-300 bg-[#705eb977] rounded-lg w-[90%] md:w-[500px]'>
      <h1 className=' text-3xl mb-1 md:m-4 p-2 text-center'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='p-2 mx-10'>
          <label className="block mb-1" htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full bg-slate-950"
          />
        </div>
        <div className='p-2 mx-10'>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full bg-slate-950"
          />
        </div>
        <div className='p-2 mx-10'>
          <label className="block mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full bg-slate-950"
          />
        </div>
        <div className='p-2 mx-10'>
          <label className="block mb-1" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full bg-slate-950"
          />
        </div>
        <div className='p-2 mx-10'>
        <button type="submit" className='p-2 my-4 w-full bg-[#6798] rounded-lg'>Create Account</button>
        </div>
      </form>
      <div className='p-2 mx-10 flex justify-between items-center'>
          <div className='border-t border-gray-400 flex-grow'></div>
          <div className='mx-2 text-center text-gray-400'>OR</div>
          <div className='border-t border-gray-400 flex-grow'></div>
        </div>
        <div className=' text-center text-xl bg-[#6798] mx-10 rounded-lg p-1 mb-6 md:mb-8'>
        <Link  to={"/login"}
               onClick={window.scrollTo({
								top: "0",
								behavior: "smooth",
							})}>
                                
          Login</Link>
        </div>
    </div>
    </div>
    </>
  );
};

export default SignUp;
