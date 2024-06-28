import axios from "axios";
import {useState, useEffect} from "react"
const backendUrl=import.meta.env.VITE_SERVER_URL

import VideoList from "../components/videoList";
const ReelSection = ({userName}) => {
  console.log("your are in reelSection");

 const [data, setData]=useState([]);
 const fetchData=async()=>{
   const resp= await axios.get(backendUrl+'/shortVideos/getAllVideos');
   setData(resp);
 }
 useEffect(()=>{
   fetchData();
 },[]);
  return (
    <>
      <VideoList videoData={data} userName={userName}/>
    </>
  )
}

export default ReelSection
