

import { useRef, useState, useEffect } from "react";
import video from '../assets/video_2024-03-23_11-52-30.mp4';
import Footer from "./footer";
import SideBar from "./sideBar";

const Video = ({item}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Change this threshold according to your needs
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
        } else {
            videoRef.current.pause();
            setPlaying(false);
        }
    }, [isVisible]);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <>
            <div className="relative h-full w-[350px] flex items-center justify-center snap-start snap-always m-7">
                <video
                    src={video}
                    loop
                    ref={videoRef}
                    onClick={handleVideoPress}
                />
                <div className="absolute bottom-3 left-3">
                    <Footer userName={item.userName} description={item.description} song={item.song}/>
                </div>
                <SideBar likes={item.likes} comments={item.comments} shares={item.shares} />
            </div>
        </>
    );
};

export default Video;
