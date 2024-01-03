import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import openai from "../../utils/services/openAi";
import { API_OPTIONS } from "../../utils/constant";
import { addGptMovieResult } from "../../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  //Search movie in TMDB database
  const fetchMovieFromTMDB = async (movies) => {
    const fetchMovieData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movies}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await fetchMovieData?.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    //Make an api call to GPT api and get movie results
    const gptQuery =
      "Act as a movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give names of 5 movies, comma separated like the example result given ahead. Example Results: The Exorcist, The Shining ,Psycho, Get Out, Hereditary ";

    const gptResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovieResponse =
      gptResponse.choices?.[0]?.message?.content?.split(",");

    const promiseArrayOfMovies = gptMovieResponse?.map((itemMoviesGptGives) =>
      fetchMovieFromTMDB(itemMoviesGptGives?.trim())
    );

    const tmdbResults = await Promise.all(promiseArrayOfMovies);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovieResponse,
        movieResults: tmdbResults,
      })
    );
    console.log(
      "🚀 ~ file: GptSearchBar.js:40 ~ handleGptSearchClick ~ tmdbResults:",
      tmdbResults
    );
    // const tmdbResults = await Promise.allSettled(promiseArrayOfMovies);
    // for (const result of tmdbResults) {
    //   if (result.status === "fulfilled") {
    //    dispatch(addGptMovieResult(result.value));
    //   } else {
    //     console.error(result.reason);
    //   }
    // }
    // console.log(
    //   "🚀 ~ file: GptSearchBar.js:55 ~ handleGptSearchClick ~ tmdbResults:",
    //   tmdbResults
    // );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
