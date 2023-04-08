import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='m-2 p-0.5 w-52 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-1'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

// for higher order component.{in videocontainer}
export const AdVideoCard=({info})=>{
   return(
    <div className='py-0.5 m-1 border border-red-900'>
      <VideoCard info={info}/>
    </div>
   )
}

export default VideoCard;