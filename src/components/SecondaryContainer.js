import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlaying);
  const popular = useSelector((state) => state.movie.popular);
  return (
    <div className="-mt-2 z-[1]">
      <MovieList title={"Now Playing"} movies={nowPlaying} />
      <MovieList title={"Popular"} movies={popular} />
      {/* <MovieList title={"Now Playing"} movies={nowPlaying} />
      <MovieList title={"Now Playing"} movies={nowPlaying} />
      <MovieList title={"Now Playing"} movies={nowPlaying} /> */}
    </div>
  );
};

export default SecondaryContainer;
