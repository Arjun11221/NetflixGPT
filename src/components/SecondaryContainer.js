import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => { 
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black '>
      <div className='-mt-64 relative z-20 ' >
      <MovieList title = {"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title = {"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title = {"Upcoming"} movies={movies.popularMovies}/>
      <MovieList title = {"Tv Shows"} movies={movies.tvShows}/>
      <MovieList title = {"Action"} movies={movies.actionMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer