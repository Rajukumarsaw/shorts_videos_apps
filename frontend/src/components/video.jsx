

import { useRef, useState, useEffect } from "react";
import Footer from "./footer";
import SideBar from "./sideBar";

const Video = ({item}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const video=item.url;
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
            <div className="relative h-[600px] w-[350px] flex items-center justify-center snap-start snap-always m-8 ">
                <video
                    src={video}
                    loop
                    ref={videoRef}
                    onClick={handleVideoPress}
                    className="h-full"
                />
                <div className="absolute bottom-3 left-3">
                    <Footer userName={item.userName} description={item.description} song={item.song}/>
                </div>
                <SideBar item={item} />
            </div>
        </>
    );
};

export default Video;
