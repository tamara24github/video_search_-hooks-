import { useState, useEffect } from "react";
import YouTube from "../apis/YouTube";

const useVideos = (defaultSearchTerm)=>{
    const [ listOfVideos, setListOfVideos ] = useState([]);

    const search =  async (searchTerm) =>{
        const response = await YouTube.get("/search",{
          params: {
            q: searchTerm
          }
        });

        setListOfVideos(response.data.items);
      };

      useEffect(()=>{
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);

      return [listOfVideos, search];
};

export default useVideos;