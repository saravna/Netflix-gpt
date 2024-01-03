import { useEffect, useState } from "react";
import { tmdbOptions } from "../utils/constants";

export const useMovieVideo = (id) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, tmdbOptions)
      .then((response) => response.json())
      .then((response) => {
        setVideos(response.results);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return { videos };
};
