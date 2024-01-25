import React from "react";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  return (
    <div className="pt-52 px-20  h-full absolute  text-neutral-50  ">
      <h1 className="text-5xl font-bold  ">{title}</h1>
      <p className="py-5 text-lg w-1/3 ">{overview}</p>
      <div className="flex gap-4 my-3">
        <a
          className="bg-white text-black bg-opacity-80 p-3 px-10 text-xl font-semibold rounded-md hover:bg-opacity-60 "
          href={"/movie/" + movies[1]?.id}
        >
          Play
        </a>
        <button className="bg-black text-white bg-opacity-80 p-3 px-5  text-xl font-semibold rounded-md hover:bg-opacity-100  ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
