/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTvShows } from "../utils/movieSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector(store=>store.movies.tvShows);

  const moviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
  !tvShows && moviesList();
  }, []);
};

export default useTvShows;
