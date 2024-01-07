import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies,'moviee');
  // console.log(typeof(movies));
  const arr= new Array(movies);
  console.log(arr , typeof(arr) ,'res');
  return (
    <div>
      <h1>{title}</h1>
      <div> 
        
        {/* {arr.map((item)=>(
          console.log(item,'itemm')
        ))} */}
        {/* {movies.data[0].id} */}
        {/* {movies.map((item)=>(
          <h1>{item.id}</h1>
        ))} */}
        {arr[0].map((movie) => (
          <>
          <MovieCard key={movie?.id} />
           <h1>{movie?.id}</h1>
          </>
        ))}
      </div>
    </div>  
  );
};

export default MovieList;
