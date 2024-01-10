import React from "react";
import {lang} from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2  py-10 bg-transparent grid grid-cols-12 ">
        <input
          className="p-4 m-4 col-span-10 outline-none rounded-md "
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="col-span-2 m-4 rounded-md bg-red-600 text-white ">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
