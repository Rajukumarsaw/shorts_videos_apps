import Video from "./video";
import { useState,useEffect  } from "react";
const VideoList = ({videoData}) => {
  const [videoDetail, setVideoDetail]=useState([]);
  useEffect(()=>{
    setVideoDetail(videoData.data);
  }, [videoData]);
  console.log(videoData, 'dat');
  return (
    <>
      <div className=" bg-black">
    <div className="flex flex-col items-center h-screen overflow-scroll snap-y snap-mandatory">
       {videoDetail && videoDetail.map((item)=>(<Video key={item._id} item={item}/>))}
    </div>
    </div>
    </>
  )
}

export default VideoList
