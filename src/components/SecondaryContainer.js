import React from "react";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.NowPlayingMovies && (
      <div className=" bg-black">
        <div className=" mt-0 md:-mt-55 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.NowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.NowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movies.NowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
