import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Profile = ({ userName, setUserName }) => {
  const navigate = useNavigate();
  const [userVideos, setUserVideos] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.post(import.meta.env.VITE_SERVER_URL + "/shortVideos/getUserVideos", { userName });
      setUserVideos(resp.data); 
    } catch (error) {
      console.error("Error fetching user videos:", error);
    }
  };

  useEffect(() => {
    if (userName) {
      fetchData();
    }
  }, [userName]); 

  console.log("userVideos", userVideos);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setUserName(''); 
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 p-4 flex-shrink-0 justify-center mt-16">
        <div className="flex items-center mb-8 ">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold">{userName}</h2>
          </div>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="#" className="flex items-center p-2 rounded-lg bg-gray-700">
                <span className="ml-2">Your Videos</span>
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center p-2 rounded-lg hover:bg-gray-700 w-full text-left">
                <span className="ml-2">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 mt-16">
        <h1 className="text-2xl font-bold mb-4">Your Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userVideos.length === 0 ? (
            <p>No videos available</p>
          ) : (
            userVideos.map((video) => (
              <div key={video._id} className="bg-gray-800 p-4 rounded-lg">
                <video src={video.url} controls className="w-full h-48 object-cover rounded-lg mb-2"></video>
                <p className="text-sm mb-2">{video.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Likes: {video.likes}</span>
                  <span>Comments: {video.comments.length}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;





