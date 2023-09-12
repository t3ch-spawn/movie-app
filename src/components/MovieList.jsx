import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {

    const topMovies = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc5Yzk0ZDBiMDYxNzA2ZTMzNWE0NjZhMWEyZDVkNSIsInN1YiI6IjY0ZmYwZTg3ZWZlYTdhMDEzN2QxYmZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvEzXnOqz4mp2KOOk36OFKHp8MLGjJlPUUJZSkI5Ao'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', topMovies)
        .then(response => response.json())
        .then(response =>   setMovieData(response.results))
        .catch(err => console.error(err));

    // const trendingMovies = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc5Yzk0ZDBiMDYxNzA2ZTMzNWE0NjZhMWEyZDVkNSIsInN1YiI6IjY0ZmYwZTg3ZWZlYTdhMDEzN2QxYmZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvEzXnOqz4mp2KOOk36OFKHp8MLGjJlPUUJZSkI5Ao",
    //   },
    // };
    // fetch(
    //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    //   trendingMovies
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setMovieData(response.results);
    //   })
    //   .catch((err) => console.error(err));


  }, []);

//   console.log(movieData)    

  const movieCardEls = movieData.slice(0, 10).map((data) => {
    return (
      <MovieCard title={data.title} path={data.poster_path} key={data.id} genreId = {data.genre_ids} date={data.release_date}/>
    );
  });

  return <div className="movie-list grid">{movieCardEls}</div>;
}
