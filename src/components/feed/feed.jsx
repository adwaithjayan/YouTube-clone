import "./feed.css"

import { Link } from "react-router-dom"


import { useEffect, useState } from "react"
import { value_converter } from "../../data"
import moment from "moment/moment"

const Feed = ({catrgory,text}) => {
    const [data,setData] =useState([]);
    const [searchData,setSearchData] =useState([]);

    const fetchData =async () =>{
        const videoList_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=${catrgory}&key=${import.meta.env.VITE_YT_API_KEY}`
        await fetch(videoList_url).then(res=>res.json()).then(data=>setData(data.items)).catch(err=>console.log(err));
        
    }

    const searchHandler=async()=>{
        const url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=viewCount&q=${text}&key=${import.meta.env.VITE_YT_API_KEY}`
        await fetch(url).then(res=>res.json()).then(data=>setSearchData(data.items)
        ).catch(err=>console.log(err));

    }

   

    


    useEffect(()=>{
        if(text){
            searchHandler();
        }
        fetchData();
    },[catrgory])


  return (
    <div className="feed">
        {data &&!searchData && data.map(item=>

        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnile" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
    )}
    {searchData.length > 0 && searchData.map(item=>
         <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
         <img src={item.snippet.thumbnails.medium.url} alt="thumbnile" />
         <h2>{item.snippet.title}</h2>
         <h3>{item.snippet.channelTitle}</h3>
         <p>{moment(item.snippet.publishedAt).fromNow()}</p>
     </Link>
    )}
    
    </div>
  )
}

export default Feed