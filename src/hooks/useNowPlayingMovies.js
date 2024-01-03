import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/slices/movieSlice";
import { tmdbOptions } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", tmdbOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(addNowPlayingMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
