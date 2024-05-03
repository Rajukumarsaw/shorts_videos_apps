
import VideoList from "./components/videoList"
import axios from "axios";
import {useState, useEffect} from "react"


const backendUrl="https://shorts-videos-apps.onrender.co"
function App() {
 const [data, setData]=useState([]);
 const fetchData=async()=>{
   const resp= await axios.get(backendUrl+'/shortVideos/getAllVideos');
   setData(resp);
 }
 useEffect(()=>{
   fetchData();
 });

 

  return (
    <>
    <VideoList videoData={data}/>

    </>
  )
}

export default App
