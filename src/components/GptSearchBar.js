import React, { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const language = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me name of 5 movies with comma seperated like the exapmle result given ahead . Example Result : Don , Sholay , 3 Idiot , Koi mil gaya , Golmaal ";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    
    console.log(gptResult.choices);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2  py-10 bg-transparent grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-10 outline-none rounded-md "
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className="col-span-2 m-4 rounded-md bg-red-600 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
