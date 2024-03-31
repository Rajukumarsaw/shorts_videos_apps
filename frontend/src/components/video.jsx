

import {useRef, useState} from "react";

//import video from '../assets/video_2024-03-23_11-52-30.mp4'
import Footer from "./footer"
import SideBar from "./sideBar";
const Video = () => {
    const [playing, setPlaying] =useState(false);
    const videoRef=useRef(null);
    const handleVideoPress = () => {
        if(playing){
        videoRef.current.pause()
        setPlaying(false)
        } else {
        videoRef.current.play()
        setPlaying(true)
        }
        }

  return (
    <>
      <div className=" relative h-[600px] w-[350px] border-4  border-red-800 flex items-center justify-center">
        <video src="https://res.cloudinary.com/doin2x6n5/video/upload/v1711884081/short_videos/video_2024-03-23_11-52-30_cydazp.mp4" loop ref={videoRef}
 onClick={handleVideoPress}>
            
        </video>
        <div className="absolute bottom-3 left-3">
      <Footer/>
      </div>
      <SideBar/>
      </div>
      
    </>
  )
}

export default Video
