import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../store/slices/movieSlice";
import { tmdbOptions } from "../utils/constants";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", tmdbOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        dispatch(addPopularMovies(response.results));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
