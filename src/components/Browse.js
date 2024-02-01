import React from "react";
import Header from "./Header";
import useMoviesList from "../hooks/useMoviesList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTop from "../hooks/useTop";
import useTvShows from "../hooks/useTvShow";
import useAction from "../hooks/useAction";

const Browse = () => {
  useMoviesList();
  usePopular();
  useTop();
  useTvShows();
  useAction();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
