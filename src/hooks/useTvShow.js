import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTvShows } from "../utils/movieSlice";
import { useEffect } from "react";

const useTvShows = ()=>{
    const dispatch = useDispatch();

    const moviesList = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTvShows(json.results));
    };
  
    useEffect(() => {
      moviesList();
    }, []);
}

export default useTvShows;