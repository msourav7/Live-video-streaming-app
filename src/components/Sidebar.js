import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => { 
  const isMenuOpen=useSelector((state)=>state.app.isMenuOpen)


  //early returning (if value is false than earky return it)
  if(!isMenuOpen) return null
  return (
    <div className=' p-5 w-48 shadow-lg ' >
      <ul className='shadow-lg'>
        <li><Link to='/'>Home</Link> </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'> Subsbcriptions</h1>
      <ul className='shadow-lg'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <h1 className='font-bold pt-5'> Subsbcriptions</h1>
      <ul  className='shadow-lg'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  )
}

export default Sidebar