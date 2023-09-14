import React from "react";
import home from "../../public/images/home.svg";
import movies from "../../public/images/movie-projector.svg";
import series from "../../public/images/tv-show.svg";
import upcoming from "../../public/images/calendar.svg";
import logout from "../../public/images/logout.svg";
import logo from "../../public/images/tv.svg";

export default function Dashboard() {
  return (
    // container for dashboard
    <div className="sticky top-0 flex flex-col items-center py-4 gap-14 w-[40%] left-0 max-w-[250px]">
      {/* top part of dashboard */}
      <div className="flex items-center justify-start w-[90%] gap-4">
        <img src={logo} alt="" />
        <p className="font-bold text-xl">MovieBox</p>
      </div>

      {/* lower part of dashboard */}
      <div className="dashboard-lower items-center flex flex-col gap-6 w-[100%]">
        {/* redirects */}
        <span className="">
          <img src={home} alt="" />
          <p className="font-bold text-[#666]">Home</p>
        </span>
        <span className="bg-softRed border-r-[4px] border-mainRed">
          <img src={movies} alt="" />
          <p className="font-extrabold text-mainRed">Movies</p>
        </span>
        <span className="">
          <img src={series} alt="" />
          <p className="font-bold text-[#666]">Tv Series</p>
        </span>
        <span className="">
          <img src={upcoming} alt="" />
          <p className="font-bold text-[#666]">Upcoming</p>
        </span>

        {/* play game */}
        <div className="border-[1px] w-[90%] max-w-[180px] rounded-xl p-4 border-mainRed">
          <p>Play movie quizzes and earn free tickets</p>
          <p>50k people are playing now</p>

          <div className="text-mainRed bg-softRed w-[100%] max-w-[140px] rounded-[20px] text-center font-[600] p-2 cursor-pointer">
            Start playing
          </div>
        </div>

        {/* logout */}
        <span><img src={logout} alt="" /> <p>Logout</p></span>
      </div>
    </div>
  );
}
