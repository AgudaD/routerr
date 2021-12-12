import React from "react";
import StarRatingDemo from "./Rating";

function Header({ searchTerm, OnSave}) {
  function saveSearchTerm(e) {
    const Term = e.target.value;
    OnSave(Term)
  }
  return (
    <header>
      <h1 className="vs">Visual Studios</h1>
      <StarRatingDemo />
      <input
        className="searchbar"
        value={searchTerm}
        type="search"
        placeholder="search..."
        onChange={saveSearchTerm}
      />
    </header>
  );
}

export default Header;