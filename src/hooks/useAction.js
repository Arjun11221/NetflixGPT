import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addActionMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useAction = ()=>{
    const dispatch = useDispatch();
    const actionMovies = useSelector(store=>store.movies.actionMovies);

    const moviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addActionMovies(json.results));
    };
  
    useEffect(() => {
      !actionMovies && moviesList();
    }, []);
}

export default useAction;