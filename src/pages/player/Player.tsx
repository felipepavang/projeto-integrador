import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import EmbedPlayer from "../../components/Player/EmbedPlayer";
import MovieService from "../../services/movies.service";
import { Movie } from "../home/Home";
import {
  Section,
  MovieData,
  MovieTitle,
  ScreenContainer,
  Description,
} from "./styles";

const PlayerScreen: React.FC = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchData = async (movieId: string) => {
      const movieService = new MovieService();

      const movie = await movieService
        .findMovieById(movieId)
        .then((response) => response.data);

      setMovie(movie);
    };

    movieId && fetchData(movieId);
  }, [movieId]);

  return (
    <>
      <Header />
      {movie && (
        <ScreenContainer>
          <MovieTitle>{movie.titulo}</MovieTitle>
          <EmbedPlayer id={movie.id} />
          <MovieData>
            <Section>Sinopse</Section>
            <Description>{movie.sinopse}</Description>
            <Section>Ano de lançamento</Section>
            <Description>{movie.ano}</Description>
            <Section>Categorias</Section>
            <Description>{movie.generos.join(", ")}</Description>
            <Section>Direção</Section>
            <Description>{movie.direcao}</Description>
          </MovieData>
        </ScreenContainer>
      )}
    </>
  );
};

export default PlayerScreen;
