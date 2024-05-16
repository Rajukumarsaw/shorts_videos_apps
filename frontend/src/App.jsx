
import { ToastContainer } from "react-toastify"
import Header from "./components/mainHeader"
import {Outlet} from "react-router-dom"

function App() {
 
  return (
    <>
    <Header/>
    <Outlet/>
    <ToastContainer
      />
    

    </>
  )
}

export default App
