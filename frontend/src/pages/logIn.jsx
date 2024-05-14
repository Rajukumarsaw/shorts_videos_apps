import { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form validation and submission logic
    console.log(formData);
  };

  return (
    <div className=' bg-slate-950  min-h-screen  flex justify-center m-2'>
    <div className='absolute mt-16 text-gray-300 bg-[#705eb977] rounded-lg w-[90%] md:w-[500px]'>
      <h1 className=' text-3xl mb-1 md:m-4 p-2 text-center'>Log In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className='text-xl p-2 my-4 w-full bg-[#6798] rounded-lg'>Log In</button>
        </div>
      </form>
      <div className='p-2 mx-10 flex justify-between items-center'>
          <div className='border-t border-gray-400 flex-grow'></div>
          <div className='mx-2 text-center text-gray-400'>OR</div>
          <div className='border-t border-gray-400 flex-grow'></div>
        </div>
        <div className=' text-center text-lg bg-[#6798] mx-10 rounded-lg p-1 mb-6 md:mb-8'>
        <Link  to={"/signup"}
               onClick={window.scrollTo({
								top: "0",
								behavior: "smooth",
							})}>
                                
          Sign Up</Link>
        </div>
    </div>
    </div>
  );
};

export default LogIn;