import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const gptMovieSuggestions = useSelector((state) => state.gpt.searchResults);

  return (
    <div className="flex flex-wrap bg-black bg-opacity-80 mt-4 p-4 justify-between">
      {gptMovieSuggestions.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
