/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import { useEffect } from "react";
import { addGptMovieResult } from "../../utils/Redux/gptSlice";

const GptMovieSuggetions = () => {
  const dispatch = useDispatch();
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  useEffect(() => {
    return () => {
      dispatch(
        addGptMovieResult({
          movieNames: null,
          movieResults: null,
        })
      );
    };
  }, []);

  if (!movieNames) return null;
  
  return (
    <div className="p-4 m-4 bg-black text-white rounded-lg bg-opacity-80">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetions;
