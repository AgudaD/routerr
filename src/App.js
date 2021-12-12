import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieItem from "./components/MovieDt/MovieItem";

import DefaultPage from "./Pages/DefaultPage";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<DefaultPage />} />
          <Route path="/movie/:id" element={<MovieItem />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;