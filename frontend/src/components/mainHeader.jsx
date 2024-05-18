import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';
import { FaUpload } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ userName, setUserName }) => {
  

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUserName('');
    toast.info('Logged out successfully', {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="h-12 fixed left-8 top-2 right-12 flex bg-white/0 backdrop:bg-transparent">
      <Link to={"/"} className="ml-5 mt-1 h-10 w-10">
        <img src={LOGO} alt="" className="h-full w-full" />
      </Link>
      <div className="absolute flex right-2">
        <button className="flex m-2 text-slate-50">
          <FaUpload className="mt-1" />
          <div>Upload</div>
        </button>
        {userName ? (
          <>
            <div className="flex m-2 text-slate-50">
              <IoMdContact className="mt-1 size-5" />
              <div>{userName}</div>
            </div>
            <button onClick={handleLogout} className="flex m-2 text-slate-50">
              <div>Logout</div>
            </button>
          </>
        ) : (
          <Link to={"/login"} className="flex m-2 text-slate-50">
            <IoMdContact className="mt-1 size-5" />
            <div>Login</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;




