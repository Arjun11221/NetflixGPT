import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTop = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);

  const moviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
   !topRatedMovies && moviesList();
  }, []);
};

export default useTop;
