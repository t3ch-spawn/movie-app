import React, { useEffect, useState } from "react";
import search from "../../public/images/search-icon.png";
import logo from "../../public/images/logo.png";
import loader from "../../public/images/loader.gif";
import logoMob from "../../public/images/tv.svg";
import MovieCardSearch from "./MovieCardSearch";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [hasFetched, setHasFetched] = useState(false);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const searchMovies = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc5Yzk0ZDBiMDYxNzA2ZTMzNWE0NjZhMWEyZDVkNSIsInN1YiI6IjY0ZmYwZTg3ZWZlYTdhMDEzN2QxYmZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvEzXnOqz4mp2KOOk36OFKHp8MLGjJlPUUJZSkI5Ao",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`,
      searchMovies
    )
      .then((response) => response.json())
      .then((response) => {
        if (searchInput === "") {
          //   console.log("gyat");
        } else if (searchInput !== "") {
          setHasFetched(true);
          return setMovieData(
            response.results.filter((movie) => {
              // only fethces movies that have a poster path in the object
              return movie.poster_path;
            })
          );
        }
      })
      .catch((err) => console.error(err));
  }, [searchInput]);

  function getInput(e) {
    setSearchInput(e.target.value);
  }

  console.log(movieData);

  const movieCardEls = movieData.slice(0, 10).map((data) => {
    return (
      <MovieCardSearch
        title={data.title}
        path={data.poster_path}
        key={data.id}
        genreId={data.genre_ids}
        date={data.release_date}
        id={data.id}
      />
    );
  });

  return (
    // Container for Header
    <div className="flex w-[100%] justify-between items-center absolute top-10 left-0 px-8 -720:mt-[40px]">
      {/* container for logo */}
      <div>
        <img src={logo} className="-720:hidden" alt="" />
        <img src={logoMob} className="-720:block hidden" alt="" />
      </div>

      {/* container for search bar */}
      <div className="relative w-[50%] search-container">
        <input
          className="bg-transparent border-2 border-white px-4 py-2 text-white w-[100%] rounded"
          type="text"
          placeholder="What do you want to watch?"
          onChange={getInput}
        />
        <img
          className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer"
          src={search}
          alt=""
        />

        {/* container for search results */}
        {searchInput ? (
          <div className="search-results absolute top-[120%] rounded-lg py-4 w-[100%] bg-white flex flex-col items-center max-h-[50vh] overflow-y-scroll gap-4">
            <p className="text-black text-2xl font-semibold">
              Search results for: {searchInput}
            </p>
            <img
              src={loader}
              className={`w-[100px] ${hasFetched ? "hidden" : "block"}`}
              alt=""
            />
            {movieCardEls}
          </div>
        ) : (
          <div></div>
        )}

        {searchInput.length > 2 && movieData.length == 0 && hasFetched ? (
          <div className="absolute top-[120%] rounded-lg w-[100%] bg-white text-black text-3xl p-8 text-center max-h-[40vh] gap-4">
            We cannot find the movie you are looking for ☹️
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* container for sign in and hamburger */}
      <div className="flex justify-center items-center text-white gap-4">
        <p>Sign In</p>
        <div className="bg-mainRed w-[40px] h-[40px] p-2 rounded-[50%] flex flex-col justify-center items-center gap-[6px]">
          <div className="w-[90%] rounded-[3px] bg-white h-[3px]"></div>
          <div className="w-[90%] rounded-[3px] bg-white h-[3px]"></div>
        </div>
      </div>
    </div>
  );
}
