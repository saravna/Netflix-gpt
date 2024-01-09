import React, { useRef } from "react";
import openai from "../utils/openai";
import { tmdbOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { updateSearchResults } from "../store/slices/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef();

  const dispatch = useDispatch();

  const searchMovieTmdb = async (name) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      tmdbOptions
    );
    const res = await data.json();
    return res;
  };

  const handleGptSearchClick = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Act as a movie recommendation system and suggest some movies for the query: ${searchText.current.value}. only give me names of 5 movies in comma separated. Example: Soodhu Kavvum, Panchathanthiram, Vadivelu's Kaathavarayan, Delhi Belly, Boss Engira Bhaskaran`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const listOfMovies = chatCompletion.choices?.[0]?.message?.content.split(",").map((t) => t.trim());

    const tmdbResults = await Promise.all(listOfMovies.map((movie) => searchMovieTmdb(movie)));

    dispatch(
      updateSearchResults(
        tmdbResults.reduce((arr, result) => [...arr, ...result.results], []).filter((mov) => !!mov.poster_path)
      )
    );
  };

  return (
    <div className="w-full flex justify-center items-center gap-5 bg-black">
      <input
        type="text"
        className="py-2 px-4 m-4 w-[200px] md:w-[450px] bg-white text-black"
        placeholder="What would you like to watch?"
        ref={searchText}
      />
      <button onClick={handleGptSearchClick} className="py-2 px-4 bg-red-700 text-white rounded-lg h-max">
        Search
      </button>
    </div>
  );
};

export default GptSearchBar;
