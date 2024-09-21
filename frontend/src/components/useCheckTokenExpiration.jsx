import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  


const useCheckTokenExpiration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (tokenExpiration && Date.now() > parseInt(tokenExpiration, 10)) {
      // Token has expired, log out the user
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      localStorage.removeItem('tokenExpiration');
      navigate('/login');
      
      // Show toast message instead of alert
      toast.error('Session expired, please log in again.', {
        position: 'top-right', 
        autoClose: 5000, 
        hideProgressBar: false, 
        closeOnClick: true, 
        pauseOnHover: true, 
        draggable: true
      });
    }
  }, [navigate]);
};

export default useCheckTokenExpiration;

