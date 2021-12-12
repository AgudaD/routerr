import React, { useState } from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { moviesList } from "../components/DummyData";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");

  function OnSave(search) {
    setSearchTerm(search);
  }
  function FilterBySearch(movie) {
    if (searchTerm) {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return true;
  }
  return (
    <div>
      <Header searchTerm={searchTerm} OnSave={OnSave} />
      <MovieList movies={moviesList} FilterBySearch={FilterBySearch} />
    </div>
  );
}

export default Homepage;