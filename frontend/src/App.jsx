import { ToastContainer } from "react-toastify";
import Header from "./components/mainHeader";
import { Outlet, Route, Routes } from "react-router-dom"; // Added Routes and Route
import { useState, useEffect } from "react";
import LogIn from "./pages/logIn"; // Import the LogIn component

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
        {/* Other routes can go here */}
        <Route path="/" element={<Outlet />} />
      </Routes>
      <Outlet/>
      <ToastContainer />
    </>
  );
}

export default App;


