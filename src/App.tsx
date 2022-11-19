import React, { useState } from "react";
import "./App.css";
import MovieService from "./services/movies.service";

type Movie = {
  id: string;
  titulo: string;
};

function App() {
  const [movies, setMovies] = useState<Movie[]>();

  const handleOnClick = async () => {
    const movieService = new MovieService();

    const movies = await movieService
      .findAllMovies()
      .then((response) => response.data);

    setMovies(movies);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleOnClick()}>Mostrar filmes</button>
        {movies && (
          <ul>
            {movies.map((movie) => (
              <li>{movie.titulo}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
