import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-60 px-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-5 text-lg w-1/3 ">{overview}</p>
      <div className="flex gap-4 my-3">
        <button className="bg-black text-white p-3 px-10 text-2xl rounded-md">
           Play
        </button>
        <button className="bg-slate-400 text-black p-3 px-5  text-2xl font-semibold rounded-md">
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
