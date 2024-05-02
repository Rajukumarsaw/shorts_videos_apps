import Video from "./video";
import { useState, useEffect } from "react";

const VideoList = ({ videoData }) => {
  const [videoDetail, setVideoDetail] = useState([]);

  useEffect(() => {
    if (videoData && videoData.data) {
      setVideoDetail(videoData.data);
    }
  }, [videoData]);

  return (
    <div className="bg-[#000000cd] overflow-hidden">
      <div className="relative flex flex-col items-center h-screen overflow-scroll snap-y snap-mandatory top-10">
        {videoDetail.length > 0 ? (
          videoDetail.map((item) => <Video key={item._id} item={item} />)
        ) : (
          Array.from({ length: 1 }).map((_, index) => (
            <div key={index} className="w-[350px] h-[600px] animate-pulse bg-[#a8b0b9c8] my-8"></div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoList;



