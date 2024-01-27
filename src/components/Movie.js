import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
    const params = useParams();
    // console.log(params.id);
  return (
    <div className="w-screen">
    <iframe
      className="w-screen h-screen"
      src={`https://vidsrc.to/embed/movie/${params.id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      
    ></iframe>
  </div>
  )
}

export default Movie