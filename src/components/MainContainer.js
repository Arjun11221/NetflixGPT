import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  console.log(movies);
  
  const mainMovie = movies[1];
  // console.log(mainMovie);
  const { original_title, overview , id } = mainMovie;
  return (
    <div className="video-player  brightness-50 bg-black " >
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
