import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";

import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  useEffect(() => {

    // const searchMovies = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc5Yzk0ZDBiMDYxNzA2ZTMzNWE0NjZhMWEyZDVkNSIsInN1YiI6IjY0ZmYwZTg3ZWZlYTdhMDEzN2QxYmZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvEzXnOqz4mp2KOOk36OFKHp8MLGjJlPUUJZSkI5Ao'
    //   }
    // };
    // fetch(`https://api.themoviedb.org/3/search/movie?query=${'ready player one'}&include_adult=false&language=en-US&page=1`, searchMovies)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }, []);

  return (
    <div className="font-main flex flex-col gap-[100px] w-[100%] justify-center items-center">
      <Hero>
        <Header/>
      </Hero>
    <MovieList/>
    </div>
  );
}

export default App;
