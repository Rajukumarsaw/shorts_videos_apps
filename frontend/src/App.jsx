
import VideoList from "./components/videoList"
import axios from "axios";
import {useState, useEffect} from "react"
import Header from "./components/mainHeader"


const backendUrl="https://shorts-videos-apps.onrender.com"
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
    <Header/>
    <VideoList videoData={data}/>

    </>
  )
}

export default App
