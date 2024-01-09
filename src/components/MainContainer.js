import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movie.nowPlaying);

  if (!movies) return;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="h-[350px] md:h-[calc(100vh-400px)] lg:h-[calc(100vh-200px)]">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
