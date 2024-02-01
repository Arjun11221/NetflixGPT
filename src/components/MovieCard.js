import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ posterPath , cardTitle }) => { 
  return (
    <div className='w-40 md:w-48 pr-4' >
        <img src={IMG_CDN_URL + posterPath} alt='Movie Card' />
        <h2 className='text-white p-2' >{cardTitle}</h2>
    </div>
  )
}

export default MovieCard