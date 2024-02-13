/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addActionMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useAction = () => {
  const dispatch = useDispatch();
  const actionMovies = useSelector((store) => store.movies.actionMovies);

  const moviesList = async () => {
    
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();
      dispatch(addActionMovies(json.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (!actionMovies) {
      moviesList();
    }
  }, [dispatch, actionMovies]);

  return {
    actionMovies,
    fetchActionMovies: moviesList,
  };
};

export default useAction;
