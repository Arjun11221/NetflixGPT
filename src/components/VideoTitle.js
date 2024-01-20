import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 px-20 h-full absolute text-white ">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="py-5 text-lg w-1/3 ">{overview}</p>
      <div className="flex gap-4 my-3">
        <button className="bg-white text-black bg-opacity-80 p-3 px-10 text-xl font-semibold rounded-md hover:bg-opacity-60 ">
          Play
        </button>
        <button className="bg-black text-white bg-opacity-80 p-3 px-5  text-xl font-semibold rounded-md hover:bg-opacity-100  ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
