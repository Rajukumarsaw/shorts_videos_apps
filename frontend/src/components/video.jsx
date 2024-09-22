import { useRef, useState, useEffect } from "react";
import Footer from "./footer";
import VideoSideBar from "./VideoSideBar";
import axios from "axios";
import { FaPlayCircle } from 'react-icons/fa'; // Add this for pause icon

const Video = ({ item, userName }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasViewed, setHasViewed] = useState(false);
    const [showPauseIcon, setShowPauseIcon] = useState(false); // New state for pause icon

    const video = item.url;

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, options);

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            videoRef.current.play();
            setPlaying(true);
            setShowPauseIcon(false); // Hide the pause icon when playing
        } else {
            videoRef.current.pause();
            setPlaying(false);
            setShowPauseIcon(true); // Show the pause icon when paused
        }
    }, [isVisible]);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
            setShowPauseIcon(true); // Show the pause icon when paused
        } else {
            videoRef.current.play();
            setPlaying(true);
            setShowPauseIcon(false); // Hide the pause icon when playing
        }
    };

    const handleVideoProgress = () => {
        const videoElement = videoRef.current;
        const percentWatched = (videoElement.currentTime / videoElement.duration) * 100;

        if (percentWatched >= 50 && !hasViewed) {
            setHasViewed(true);
            axios.post(`${import.meta.env.VITE_SERVER_URL}/interaction/postInteractionData`, {
                userName,
                videoId: item._id,
                interactionType: 'view'
            })
                .then(response => {
                    console.log("View registered successfully:", response.data);
                })
                .catch(error => {
                    console.error("Error registering view:", error);
                });
        }
    };

    return (
        <>
            <div className="relative h-[600px] w-[350px] flex items-center justify-center snap-start snap-always m-8">
                <video
                    src={video}
                    loop
                    ref={videoRef}
                    onClick={handleVideoPress}
                    onTimeUpdate={handleVideoProgress}
                    className="h-full rounded-xl"
                />
                {/* Pause icon overlay */}
                {showPauseIcon && (
                    <FaPlayCircle
                        className="absolute text-white text-6xl opacity-80 cursor-pointer"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        onClick={handleVideoPress}
                    />
                )}
                <div className="absolute bottom-3 left-3">
                    <Footer userName={item.userName} description={item.description} song={item.song} />
                </div>
                <VideoSideBar item={item} userName={userName} />
            </div>
        </>
    );
};

export default Video;

