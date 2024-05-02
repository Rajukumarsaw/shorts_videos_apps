
import VideoList from "./components/videoList"
import axios from "axios";
import {useState, useEffect} from "react"
import {Helmet} from "react-helmet"

const backendUrl="http://localhost:8000"
function App() {
 const [data, setData]=useState([]);
 const fetchData=async()=>{
   const resp= await axios.get(backendUrl+'/shortVideos/getAllVideos');
   setData(resp);
 }
 useEffect(()=>{
  <Helmet>
        <title>New Page Title</title>
        <meta name="description" content="New description for the page" />
      </Helmet>
   fetchData();
 });

 

  return (
    <>
    <VideoList videoData={data}/>

    </>
  )
}

export default App
