import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";

import "./App.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {

   
  }, []);

  return (
    <div className="font-main flex flex-col gap-[100px] w-[100%] justify-center items-center">
      <Hero>
        <Header/>
      </Hero>
    <MovieList/>
    <Footer/>
    </div>
  );
}

export default App;
