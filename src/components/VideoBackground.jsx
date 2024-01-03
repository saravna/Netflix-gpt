import React from "react";
import { useMovieVideo } from "../hooks/useMovieVideos";

const VideoBackground = ({ id }) => {
  const { videos } = useMovieVideo(id);

  const trailer = videos.find((v) => v.type === "Trailer");
  console.log(trailer);
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <iframe
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&mute=1&controls=0&disablekb=1&iv_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-video pointer-events-none"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
