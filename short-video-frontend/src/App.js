import React,{useState,useEffect} from "react";
import './App.css';
import Video from "./componenets/Video";
import Axios from "./componenets/axios";
//css file

function App() {

  const [videos, setVideos] = useState([]);

  async function fetchData(){
    const res = await Axios.get(("v2/posts"));
    setVideos(res.data);
    return res;
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map((videoProps)=>{
          return (
            <Video url={videoProps.url}
              channel={videoProps.channel}
              description={videoProps.description}
              song={videoProps.song}
              likes={videoProps.likes}
              shares={videoProps.shares}
              messages={videoProps.messages}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
