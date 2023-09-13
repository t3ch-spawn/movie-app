import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heart from "../../public/images/heart.png";
import imdb from "../../public/images/imdb.png";
import tomato from "../../public/images/rotten-tomato.png";

export default function MovieCard(props) {
  const [genreEls, setGenreEls] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  function getPicUrl(pic_path) {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${pic_path}`;
  }

  useEffect(() => {
    const genres = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc5Yzk0ZDBiMDYxNzA2ZTMzNWE0NjZhMWEyZDVkNSIsInN1YiI6IjY0ZmYwZTg3ZWZlYTdhMDEzN2QxYmZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvEzXnOqz4mp2KOOk36OFKHp8MLGjJlPUUJZSkI5Ao",
      },
    };
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", genres)
      .then((response) => response.json())
      .then((response) =>
        // setting the array of genre elements from the api call
        setGenreEls((prevEl) => {
          let test = props.genreId.map((genre) => {
            let obj = response.genres.find((genreArrObj) => {
              return genreArrObj.id === genre;
            });

            return obj.name;
          });

          return test;
        })
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="relative">
      {/* favourties container */}
      <div
        onClick={() => {
          setIsFavourite(!isFavourite);
        }}
        className={`favorite ${
          isFavourite ? "active" : ""
        } absolute top-4 right-4 p-2 rounded-[50%] bg-favourite z-[10]`}
      >
        <img src={heart} className="" alt="" />
      </div>

      <Link to={`/movies/${props.id}`}>
        <div
          data-testid="movie-card"
          className="flex flex-col items-start w-[100%] gap-4 relative"
        >
          {/* movie poster */}
          <div className="w-[100%]">
            <img
              data-testid="movie-poster"
              className="w-[100%]"
              src={getPicUrl(props.path)}
              alt="movie-poster"
            />
          </div>

          {/* movie details */}
          <div className="flex flex-col items-start gap-[6px]">
            {/* year of release and region */}
            <div className="text-movieGray">
              Release date:
              <span data-testid="movie-release-date"> {props.date}</span>
            </div>

            {/* movie title */}
            <h3 data-testid="movie-title" className="font-bold">
              {props.title}
            </h3>

            {/* rating */}
            <div className="flex w-[100%] justify-between">
              {/* imdb rating */}
              <div className="flex gap-[4px] items-center">
                <img src={imdb} className="h-[100%]" alt="" />
                <p className="text-sm">{props.rating * 10}/100</p>
              </div>

              {/* rotten tomato rating */}
              <div className="flex gap-[4px] items-center">
                <img src={tomato} className="h-[100%]" alt="" />
                <p className="text-sm">{props.rating * 10}%</p>
              </div>
            </div>

            {/* movie genre */}
            <div className="text-movieGray font-bold">
              {genreEls.join(", ")}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
