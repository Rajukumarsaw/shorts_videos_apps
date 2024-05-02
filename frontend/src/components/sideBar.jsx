import { RiHeart3Fill } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import axios from "axios";

const SERVER_URL = "http://localhost:8000";

const SideBar = ({ item }) => {
  const [like, setLike] = useState(parseInt(item.likes));
  const [comment, setComment] = useState(item.comments || []);
  const [displayCommentSection, setDisplayCommentSection] = useState(false);
  const [newComment, setNewComment] = useState({ text: "", username: "" });
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [liked, setLiked]=useState(false);

  useEffect(() => {
    const updateData = async () => {
      try {
        const payload = {
          likes: like,
          comments: comment
        };
        const res = await axios.put(SERVER_URL + `/shortVideos/editStats/${item._id}`, payload);
        if (res.data.success) {
          console.log("Updated successfully");
        }
      } catch (err) {
        console.error("Error updating data:", err);
      }
    };

    updateData();
  }, [like, comment, item._id]);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    setComment([...comment, newComment]);
    setNewComment({ text: "", username: item.userName }); // Clear input text
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setNewComment({ text: value, username: item.userName });
  };

  const handleLikeOnclick = () => {
    setLiked(!liked);
    if (!liked) {
      setLike(like + 1);
    }
    else{
      setLike(like - 1);
    }
  };
  

  const handleCommentOnclick = () => {
    setDisplayCommentSection(!displayCommentSection);
  };

  const handleShareOnclick = () => {
    setShowShareMenu(!showShareMenu);
  };

  const shareToWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=Check out this video: ${window.location.href}`;
    window.open(url, "_blank");
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${window.location.href}&text=Check out this video`;
    window.open(url, "_blank");
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="absolute right-5 bottom-15 flex flex-col text-amber-50 text-center">
      <div className="my-2">
  {liked ? (
    <RiHeart3Fill size={30} onClick={handleLikeOnclick} className="text-red-500" />
  ) : (
    <RiHeart3Fill size={30} onClick={handleLikeOnclick} className="text-white" />
  )}
  <div>{like}</div>
</div>

        <div className="my-2">
          <BiCommentDetail size={30} onClick={handleCommentOnclick} />
          <div>{comment.length}</div>
        </div>
        <div className="my-2">
          <LuShare2 size={30} onClick={handleShareOnclick} />
        </div>
      </div>
      {showShareMenu && (
  <div className="absolute top-10 right-10 bg-white border rounded shadow-lg p-4 ">
    <button onClick={shareToWhatsApp}><RiWhatsappFill className=" text-green-500 h-10 w-10 mx-5"/></button>
    <button onClick={shareToTwitter}><FaTwitter className=" text-blue-500 h-10 w-10 mx-5"/> </button>
    <button onClick={shareToFacebook}><FaFacebook className=" text-blue-500 h-10 w-10 mx-5"/></button>
  </div>
)}

      {displayCommentSection && (
        <div className="absolute -right-80 bottom-15 mt-40 p-4 bg-white border rounded shadow-lg max-h-96 overflow-y-auto">
          {comment.map((commentItem, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">{commentItem.username}: </span>
              <span>{commentItem.text}</span>
            </div>
          ))}
          <div className=" flex ">
            <div className="border-neutral-600 border-solid border-2 flex-grow">
              <input type="text" name="text" placeholder="add a comment" value={newComment.text} onChange={handleOnChange} className="w-full h-full" />
            </div>
            <button className="ml-2 rounded-md p-2 bg-[#22857b66]" onClick={handleOnsubmit}>Add</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;


