import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import openai from "../../utils/services/openAi";
import { addGptMovieResult } from "../../utils/Redux/gptSlice";
import { fetchMovieFromTMDB } from "../../hooks/useMultilplePromise";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    try {
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
        //Search movie in TMDB database
        fetchMovieFromTMDB(itemMoviesGptGives)
      );
      const tmdbResults = await Promise.allSettled(promiseArrayOfMovies);
      const movieResultsPush = [];
      for (const result of tmdbResults) {
        if (result.status === "fulfilled") {
          movieResultsPush.push(result.value);
        } else {
          console.error(result.reason);
        }
      }
      dispatch(
        addGptMovieResult({
          movieNames: gptMovieResponse,
          movieResults: movieResultsPush,
        })
      );
    } catch (error) {
      console.error(error?.message);
    }
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3  md:m-4 py-2 px-4 m-3 bg-red-700 hover:bg-red-400 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
