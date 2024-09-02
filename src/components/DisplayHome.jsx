import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
        <div>
            <Navbar></Navbar>
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
          <div className='flex overflow-auto over'>
          {albumsData.map((element,index)=>(<AlbumItem key={index} name={element.name} desc={element.desc} id={element.id} image={element.image}></AlbumItem>))}
          </div>  
        </div>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
          <div className='flex overflow-auto over'>
          {songsData.map((element,index)=>(<SongItem key={index} name={element.name} desc={element.desc} id={element.id} image={element.image}></SongItem>))}
          </div>  
        </div>

    </>
  )
}

export default DisplayHome