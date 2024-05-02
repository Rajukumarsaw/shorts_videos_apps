
import Video from "./video";
import { useState,useEffect  } from "react";
const VideoList = ({videoData}) => {
  const [videoDetail, setVideoDetail]=useState([]);
  useEffect(()=>{
    setVideoDetail(videoData.data); 
  }, [videoData]);
  return (
    <>
      <div className=" bg-[#000000cd] overflow-hidden">
    <div className="relative flex flex-col items-center h-screen overflow-scroll snap-y snap-mandatory top-10">
       {videoDetail && videoDetail.map((item)=>(<Video key={item._id} item={item}/>))}
    </div>
    </div>
    </>
  )
}

export default VideoList

