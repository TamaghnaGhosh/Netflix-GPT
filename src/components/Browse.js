import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearchContainer/GptSearchPage";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/Redux/gptSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const gptStore = useSelector((store) => store.gpt);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!gptStore?.showGptSearch) {
      dispatch(
        addGptMovieResult({
          movieNames: null,
          movieResults: null,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gptStore?.showGptSearch]);

  return (
    <div>
      <Header />
      {gptStore?.showGptSearch ? (
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
