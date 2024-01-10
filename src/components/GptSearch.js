import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BODY_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img className="h-screen w-screen " src={BODY_URL} alt="img" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch