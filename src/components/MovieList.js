import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-8 ">
      <h1 className="text-3xl py-10 text-white font-semibold ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <a href={"/movie/" + movie?.id} key={movie?.id}>
              <MovieCard
                cardTitle={movie?.title || movie?.name}
                posterPath={movie?.poster_path}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
