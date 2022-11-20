import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import HighlightMovie from "../../components/HighlightMovie/HighlightMovie";
import MovieRow from "../../components/MovieRow/MovieRow";
import MovieService from "../../services/movies.service";
import { ScreenContainer } from "./styles";
import { sample } from "lodash";

export type Movie = {
  id: string;
  titulo: string;
  sinopse: string;
  ano: string;
  direcao: string;
  generos: string[];
  duracao: number;
};

const HomeScreen: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchData = async () => {
      const movieService = new MovieService();

      const movies = await movieService
        .findAllMovies()
        .then((response) => response.data);

      setMovies(movies);
    };

    fetchData();
  }, []);

  const randomMovie = sample(movies);

  return (
    <>
      <Header />
      {movies && (
        <ScreenContainer>
          {randomMovie && (
            <HighlightMovie
              movieId={randomMovie.id}
              title={randomMovie.titulo}
              description={randomMovie.sinopse}
              releaseYear={randomMovie.ano}
              category={randomMovie.generos.join(", ")}
              director={randomMovie.direcao}
            />
          )}
          <MovieRow title={"Adicionados recentemente"} movies={movies} />
        </ScreenContainer>
      )}
    </>
  );
};

export default HomeScreen;
