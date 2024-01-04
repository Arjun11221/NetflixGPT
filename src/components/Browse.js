import React from "react";
import Header from "./Header";
import useMoviesList from "../hooks/useMoviesList";

const Browse = () => {
 
  useMoviesList();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
