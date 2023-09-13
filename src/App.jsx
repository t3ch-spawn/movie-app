import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";

import "./App.css";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="font-main flex flex-col gap-[100px] w-[100%] justify-center items-center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
