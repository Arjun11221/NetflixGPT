import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({ key }) => { 
  console.log(key);
  return (
    <div>
        {/* <img src={IMG_CDN_URL + posterPath} alt='Movie Card' /> */}
        <h1>{key}</h1>
    </div>
  )
}

export default MovieCard