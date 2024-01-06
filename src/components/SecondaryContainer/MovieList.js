import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto transition-all">
        <div className="flex">
          {movies?.map((movie) => (
            <Link to={`/browse/watch/${movie?.id}`} key={movie?.id}>
              <MovieCard
                posterPath={movie?.poster_path}
                title={movie?.original_title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
