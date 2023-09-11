import React from "react";
import johnWick from "../../public/images/john-wick.png";
import playBtn from "../../public/images/play-btn.png"

const styles = {
  backgroundImage: `url(${johnWick})`,
};

export default function Hero(props) {
  return (
    <div
      style={styles}
      className="flex flex-col w-[100%] items-start justify-around min-h-[80vh] relative px-8 bg-center bg-no-repeat bg-cover text-white"
    >
      {props.children}

      {/* container for typography */}
      <div className="flex flex-col gap-4">
        {/* heading */}
        <h1 className="text-5xl leading-[130%]">
          John Wick 3 : <br /> Parabellum
        </h1>

        {/* container for rating */}
        <div></div>

        {/* para */}
        <p className="max-w-[400px]">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

        {/* watch trailer btn */}
        <div className="cursor-pointer bg-mainRed max-w-[200px] flex justify-center items-center p-2 rounded gap-2">
          <img src={playBtn} alt="" />
          <p className="uppercase font-[600]">Watch Trailer</p>
        </div>
      </div>
    </div>
  );
}
