import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useNowPlayingMovies } from "../hooks";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const gptModalVisible = useSelector((state) => state.gpt.modalVisible);
  return (
    <div className="bg-black text-white">
      {gptModalVisible ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
