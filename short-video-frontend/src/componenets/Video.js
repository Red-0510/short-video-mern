import React,{useState,useRef} from "react";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
//css file
import "./Video.css";

function Video(props){

    const [playing,setPlaying]  =useState(false);

    // useRef hooks the particular DOm element which can be used to toggle the properties of the DOM element
    const videoRef = useRef(null);

    function handleVideoPress(){
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video 
                src={props.url}
                className="video_player"
                loop="loop"
                type="text/html"
                ref={videoRef}
                onClick={handleVideoPress}
                >
            </video>
            <VideoFooter channel={props.channel}
                description={props.description}
                song={props.song}/>
            <VideoSideBar likes={props.likes}
                shares={props.shares} 
                messages={props.messages}/>
        </div>
    );
};

export default Video;