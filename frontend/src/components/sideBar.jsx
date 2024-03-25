import { RiHeart3Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import { useState } from "react";

const SideBar = () => {
    const [like, setLike]=useState(0);
    const [comment, setComment]= useState(0);
    const [share, setShare]= useState(0);
    const handleLikeOnclick=()=>{
          setLike((like)=>like+1);
    }
    const handleCommentOnclick=()=>{
        setComment((comm)=>comm+1);
  }
  const handleShareOnclick=()=>{
    setShare((share)=>share+1);
}
  return (
    <>
      <div className="absolute right-5 bottom-15 flex flex-col text-amber-50 text-center"> 
          <div className=" my-2">
            <RiHeart3Fill size={30} onClick={handleLikeOnclick}/>
            <div >{like}</div>
          </div>
        <div className=" my-2">
          <BiCommentDetail size={30} onClick={handleCommentOnclick}/>
          <div>{comment}</div>
        </div>
        <div className=" my-2">
           <LuShare2 size={30} onClick={handleShareOnclick}/>
           <div>{share}</div>
        </div>
      </div>
    </>
  )
}

export default SideBar
