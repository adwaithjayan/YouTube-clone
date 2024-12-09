import { useParams } from 'react-router-dom'
import Playvideo from '../../components/Playvideo/Playvideo'
import Recomended from '../../components/recomended/recomended'
import './video.css'

const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
      <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video