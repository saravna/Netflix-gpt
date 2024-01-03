import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="p-2 font-bold text-3xl">{title}</h1>
      <div className="flex flex-no-wrap gap-5 overflow-x-scroll">
        {(movies || []).map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
