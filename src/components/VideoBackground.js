import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ movieId }) => {
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/848326/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    console.log(trailer);
  };
  useEffect(() => {
    getMoviesVideo();
  }, []);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fhr3MzT6exg?si=hnb4aS_WRHHiWUcY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
