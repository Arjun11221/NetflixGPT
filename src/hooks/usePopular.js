import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopular = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies);

    const moviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(() => {
     !popularMovies && moviesList();
    }, []);
}

export default usePopular;