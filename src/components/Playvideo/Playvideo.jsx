import './playvideo.css'


import like from '../../assets/like.png' 
import dislike from '../../assets/dislike.png' 
import share from '../../assets/share.png' 
import save from '../../assets/save.png' 
import user_profile from '../../assets/user_profile.jpg' 
import { useEffect, useState } from 'react'
import { value_converter } from '../../data'
import moment from 'moment/moment'
import { useParams } from 'react-router-dom'

const Playvideo = () => {
  const {videoId} =useParams()
  const [apiData,setApiData] =useState(null);
  const [channelData,setChannelData] =useState(null);
  const [comments,setComments] =useState(null);

  const fetchData =async()=>{
    const url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YT_API_KEY}`
    await fetch(url).then(response=>response.json()).then(data=>setApiData(data.items[0])).catch(error=>console.log("Error when fetching video data",error))
  }

  const fetchOtherData = async()=>{
    const link =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${import.meta.env.VITE_YT_API_KEY}`
    await fetch(link).then(response=>response.json()).then(data=>setChannelData(data.items[0])).catch(error=>console.log("Error when fetching channel data",error))


    const commentUrl=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${import.meta.env.VITE_YT_API_KEY}`
    await fetch(commentUrl).then(response=>response.json()).then(data=>setComments(data.items)).catch(error=>console.log("Error when fetching comments",error))

  }

  useEffect(()=>{
    fetchData()
  },[videoId])

  useEffect(()=>{
    fetchOtherData()
  },[apiData])
  
  if(!channelData )return <div>Loading....</div>
  if(!comments )return <div>Loading....</div>
  
  

  return (
    <div className='play-video'>
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
      <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
      <div className='play-video-info flex-div'>
        <p>{value_converter(apiData?apiData.statistics.viewCount:0)} views &bull; {apiData ?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span>
            <img src={like} alt="like" />{apiData ? value_converter(apiData.statistics.likeCount):0}
          </span>
          <span>
            <img src={dislike} alt="like" />
          </span>
          <span>
            <img src={share} alt="like" />Share
          </span>
          <span>
            <img src={save} alt="like" />Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher flex-div">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="jack" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):0} Subscibers</span>
        </div>
        <button>Subscibe</button>
      </div>
      <div className='vd-desc'>
        <p>{apiData?apiData.snippet.description.slice(0,250):""}</p>
        <hr />
    <h4>{apiData?value_converter(apiData.statistics.commentCount):0} Comments</h4>
    {comments&&comments.map(comment=>
    <div className="comment" key={comment.id}>
      <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl ||user_profile} alt="user" />
      <div>
        <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
        <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
        <div className="comment-action">
          <img src={like} alt="like" />
          <span>{value_converter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
          <img src={dislike} alt="like" />
        </div>
      </div>
    </div>
    )}
    

      </div>
    </div>
  )
}

export default Playvideo