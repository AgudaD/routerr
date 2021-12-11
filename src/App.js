import React, { useState } from "react";
import Movies from "./components/Movies";
import { moviesList } from "./components/DummyData";
import Rating from "./components/Rating";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reels from "./components/Reels";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <h1 className="vs">Visual Studios</h1>

        <Rating />

        <input
          className="searchbar"
          type="search"
          placeholder="search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </header>
      <div className="movie-container">
        {moviesList
          .filter((moviesList) =>  {
            if (searchTerm === "") {
              return moviesList;
            } else if (
              moviesList.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return moviesList;
            }
          })
          .map((moviesList, key) => (
            <Movies {...moviesList} key={key} />
          ))}
          
          <Routes>
            <Route exact path="/" component={<DummyData />}/>
            <Route path="/trails" component={<Reels />} />
          </Routes>{""}
          

      </div>
    </>
  );
}

export default App;