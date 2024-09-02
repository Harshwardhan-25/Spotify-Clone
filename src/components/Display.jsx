import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const ref1=useRef();

  const location=useLocation();
  // console.log(location);
  const isAlbum = location.pathname.includes("album");
  // console.log(isAlbum);
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // console.log(albumId);
  const bgColor = albumsData[Number(albumId)].bgColor;
  // console.log(bgColor);

  useEffect(()=>{
     
       ref1.current.style.background = isAlbum ? `linear-gradient(${bgColor},#121212)` : `#121212`
   
  })

  return (
    <div ref={ref1} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome></DisplayHome>}></Route>
            <Route path='/album/:id' element={<DisplayAlbum></DisplayAlbum>}></Route>
        </Routes>


    </div>
  )
}

export default Display