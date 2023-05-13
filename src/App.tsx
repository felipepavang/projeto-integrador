import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home/Home";
import PlayerScreen from "./pages/player/Player";
import RegisterMovieScreen from "./pages/registerMovie/registerMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/filme/:movieId" element={<PlayerScreen />} />
        <Route path="/register-movie" element={<RegisterMovieScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
