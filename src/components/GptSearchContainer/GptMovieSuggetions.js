/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";

const GptMovieSuggetions = () => {
  
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

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
