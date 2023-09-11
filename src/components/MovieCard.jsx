import React, { useEffect, useState } from "react";
import batman from "../../public/images/batman.png";

export default function MovieCard(props) {
  const [genreArr, setGenres] = useState([]);
  const [genreEls, setGenreEls] = useState([]);

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
    <div className="flex flex-col items-start w-[100%] gap-4">
      {/* movie poster */}
      <div className="w-[100%]">
        <img className="w-[100%]" src={getPicUrl(props.path)} alt="" />
      </div>

      {/* movie details */}
      <div className="flex flex-col items-start">
        {/* year of release and region */}
        <div className="text-movieGray">USA, 2005</div>

        {/* movie title */}
        <h3 className="font-bold">{props.title}</h3>

        {/* rating */}
        <div></div>

        {/* movie genre */}
        <div className="text-movieGray">{genreEls.join(', ')}</div>
      </div>
    </div>
  );
}
