import React, { useEffect, useState } from "react";
import loader from "../../public/images/loader.gif";
import related from "../../public/images/related-content.png";
import play from "../../public/images/play-yt.jpg";

// router
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const [hasFetched, setHasFetched] = useState(false);
  const [genreArr, setGenreArr] = useState([]);

  function getPicUrl(pic_path) {
    return `https://image.tmdb.org/t/p/original/${pic_path}`;
  }

  useEffect(() => {
    const details = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc5Yzk0ZDBiMDYxNzA2ZTMzNWE0NjZhMWEyZDVkNSIsInN1YiI6IjY0ZmYwZTg3ZWZlYTdhMDEzN2QxYmZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9IvEzXnOqz4mp2KOOk36OFKHp8MLGjJlPUUJZSkI5Ao",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, details)
      .then((response) => response.json())
      .then((response) => {
        setHasFetched(true);
        setGenreArr(response.genres);
        return setMovie(response);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(movie);
  // let runtimeMins = movie.runtime % 60
  // let runtimeHour = Math.floor(movie.runtime / 60)

  // console.log(genreArr)

  return (
    <div className="text-black w-[100%]">
      <img
        src={loader}
        className={`${
          hasFetched ? "hidden" : "block"
        } fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}
        alt=""
      />

      {/* container of page */}
      <div className={`${hasFetched ? "block" : "hidden"}`}>
        {/* dashboard */}
        <div></div>

        {/* main content */}

        <div className="flex flex-col gap-4">
          {/* trailer section */}
          <div className="flex justify-center items-center overflow-hidden bg-gray-300 p-4">
            <div className="w-[60%] flex justify-around items-center">
              <img
                src={getPicUrl(movie.backdrop_path ? movie.backdrop_path : movie.poster_path)}
                className="rounded-xl object-cover max-h-[70vh]"
                alt=""
              />

              {/* <div className="cursor-pointer flex flex-col gap-2">
                <img src={play} className="w-[100px]" alt="" />
                <p>Watch Trailer</p>
              </div> */}
            </div>
          </div>

          {/* movie main details and rating */}
          <div className="flex justify-start items-center gap-2 text-[#404040] font-[500]">
            {/* movie title */}
            <p>{movie.title}</p>
            <div>•</div>

            {/* release date */}
            <p>{movie.release_date}</p>
            <div>•</div>

            {/* run time */}
            <p>{movie.runtime}mins</p>

            {/* genres */}
            <div className="text-mainRed flex gap-6">
              {genreArr.map((genre) => (
                <p className="border-[1px] border-[#F8E7EB] rounded-[20px] p-2 font-[500]">
                  {genre.name}
                </p>
              ))}
            </div>
          </div>

          {/* movie overview and related content */}
          <div className="flex">
            {/* movie overview, directors and writers */}
            <div className="flex flex-col gap-4 w-[50%]">
              <p>{movie.overview}</p>

              <p>Director: <span className="text-mainRed">Lorem ipsum dolor sit amet</span></p>

              <p>Writers: <span className="text-mainRed">Lorem ipsum dolor sit amet</span></p>

              <p>Stars: <span className="text-mainRed">Lorem ipsum dolor sit amet</span></p>

              <div>Top rated movie</div>
            </div>

            {/* movie related content */}
            <div>
              {/* <img src={related} alt="" />   */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
