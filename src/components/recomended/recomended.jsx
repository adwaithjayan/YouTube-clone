import "./recomented.css"

import { useEffect, useState } from "react"
import { value_converter } from "../../data"
import { Link } from "react-router-dom"


const Recomended = ({categoryId}) => {

    const [data,setData] =useState([])

    const fetchData= async()=>{
        const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${import.meta.env.VITE_YT_API_KEY}`
    
        await fetch(url).then(response => response.json()).then(data=>setData(data.items)).catch(err =>console.log(err));
        
    }

    useEffect(()=>{
        fetchData()
    },[])
    

if(!data) return <div>Loading...</div>
  return (
    <div className="recommended">

{data.map(item=>

        <Link to={`/video/${categoryId}/${item.id}`} className="side-video-list" key={item.id}>
            <img src={item.snippet.thumbnails.medium.url} alt="thumb" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
        </Link>
        
    )}
    </div>
  )
}

export default Recomended