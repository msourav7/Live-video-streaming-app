import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard, {AdVideoCard} from './VideoCard'

const VideoContainer = () => {

  const [videos,setVideos]=useState([])

  useEffect(()=>{
     getVideos()
  },[])

  const getVideos=async()=>{
  const data= await fetch(YOUTUBE_VIDEOS_API)
  const json=await data.json()
  setVideos(json.items)
  }

  return (
    <div className='flex flex-wrap'>
       
      {/* eg of hoc to special fn to a particular component(from videocard) */}
      {videos[0]&&<AdVideoCard info={videos[0]}/>}

      {/* passing videodata(setVideo) as a prop inside each VideoCard and then displaying it in vContainer
      <VideoCard info={videos[0]}/> */} 

      {videos.map((video)=>(
      <Link key={video.id} to={'/watch?v='+video.id}><VideoCard  info={video}/></Link> 
      ))}
    </div>
  )
}

export default VideoContainer