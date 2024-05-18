import { ToastContainer } from "react-toastify";
import Header from "./components/mainHeader";
import { Route, Routes } from "react-router-dom"; 
import { useState, useEffect } from "react";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import ReelSection from "./pages/reelSection"; 

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserName(parsedData.userName || '');
    }
  }, []);

  return (
    <>
      <Header userName={userName} setUserName={setUserName} />
      <Routes>
        <Route path="/login" element={<LogIn setUserName={setUserName} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ReelSection />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;



