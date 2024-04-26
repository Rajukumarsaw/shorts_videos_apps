
import VideoList from "./components/videoList"
import axios from "axios";
import {useState, useEffect} from "react"
const backendUrl="http://localhost:8000"
function App() {
 const [data, setData]=useState([]);
 const fetchData=async()=>{
   const resp= await axios.get(backendUrl+'/shortVideos/getAllVideos');
   setData(resp);
   console.log(data, 'datas');
 }
 useEffect(()=>{
   fetchData();
 })

 

  return (
    <>
    <VideoList videoData={data}/>

    </>
  )
}

export default App
