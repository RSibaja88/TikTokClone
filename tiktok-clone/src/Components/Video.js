import React, { useRef, useState } from 'react';
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import './Video.css';

function Video({ url, channel, description, song, likes, comments, shares }) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null)

    const onVideoPress = () => {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
      } else {
        videoRef.current.play();
        setPlay(true)
        }
      };



    return (
        <div className="video">
        <video className="video_player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}></video>
        <Sidebar
            likes={likes}
            comments={comments}
            shares={shares} />
        <Footer
            channel={channel}
            description={description}
            song={song}
            />
        </div>

    )
}

export default Video


