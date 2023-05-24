import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = ()=>{

    const [ selectedVideo, setSelectedVideo ] = useState(null);
    const [listOfVideos, search] = useVideos("harry potter movie");

    useEffect(()=>{
        setSelectedVideo(listOfVideos[0]);
    }, [listOfVideos])


      return(
        <div className = "ui container">
        <SearchBar onTerm = {search}/>
        <div className = "ui grid">
          <div className = "ui row">
          <div className = "eleven wide column">
            <VideoDetail currentVideo = {selectedVideo}/>
          </div>
            <div className = "five wide column">
              <VideoList videos = {listOfVideos} onVideoSelect = {setSelectedVideo}/>
            </div>
          </div>
        </div>
        </div>
  
      );
}

export default App;
