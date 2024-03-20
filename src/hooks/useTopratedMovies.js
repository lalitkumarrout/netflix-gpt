import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopratedMovies } from "../utils/moviesSlice";

const useTopratedMovie= () => {
  //fetch data from tmdb api and update the store
  const dispatch = useDispatch();
  const Topratedmovie = useSelector((store) => store.movies.TopratedMovies);
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    !Topratedmovie && getTopratedMovies();
  }, []);
};

export default useTopratedMovie;
