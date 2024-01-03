import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="h-[320px] w-[200px] p-2 flex-shrink-0">
      <div className="h-[230px] w-full mb-2">
        <img src={`${IMAGE_CDN_URL}${movie.poster_path}`} className="w-full h-full object-cover" alt={movie.title} />
      </div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
