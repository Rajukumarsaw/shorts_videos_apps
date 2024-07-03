import Video from "./video";
import { useState, useEffect } from "react";
import loadingImg from "../assets/image.png"
const VideoList = ({ videoData, userName }) => {
  const [videoDetail, setVideoDetail] = useState([]);
  console.log(userName);
  console.log(videoData);
  useEffect(() => {
    if (videoData) {
      setVideoDetail(videoData);
    }
  }, [videoData]);

  return (
    <div className="bg-[#000000cd] overflow-hidden">
      <div className="relative flex flex-col items-center h-screen  overflow-scroll snap-y snap-mandatory top-14">
        {videoDetail.length > 0 ? (
          videoDetail.map((item) => <Video key={item._id} item={item} userName={userName} />)
        ) : (
          
            <div className="w-[350px] h-[600px]  bg-[#a8b0b9c8] my-8">
              <img src={loadingImg} alt="loading video"  className="h-full w-full"/>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default VideoList;



