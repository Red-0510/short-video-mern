import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote"
import Ticker from "react-ticker"

// css file
import "./VideoFooter.css";

function VideoFooter(props){
    return (
        <div className="VideoFooter">
            <div className="VideoFooter_Text">
                <h3>@{props.channel}</h3>
                <p>{props.description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>
                    <Ticker mode="smooth" 
                    direction="toRight"
                    speed={3}>
                        {({index})=>(
                            <>
                                <p>{props.song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
        </div>
    );
};

export default VideoFooter;