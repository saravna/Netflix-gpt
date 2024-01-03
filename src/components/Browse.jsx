import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useNowPlayingMovies } from "../hooks";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="bg-black text-white">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
