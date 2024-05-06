import LOGO from "../assets/LOGO.png";
import { FaUpload } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

const Header = () => {
  return (
    <div className="h-12  fixed left-10 top-2 right-20  flex bg-white/0 backdrop:bg-transparent">
      <div className="ml-5 mt-1 h-10 w-10">
        <img src={LOGO} alt="" className="h-full w-full" />
      </div>
      <div className="absolute flex right-2">
        <button className="flex m-2 text-slate-50">
         <FaUpload className="mt-1"/>
         <div>Upload</div>
        </button>
        <button className="flex m-2 text-slate-50">
        <IoMdContact className="mt-1 size-5"/>
        <div>Login</div>
        </button>
        
       
      </div>
    </div>
  );
}

export default Header;

