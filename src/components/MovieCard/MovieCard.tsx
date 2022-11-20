import React from "react";
import { MovieContainer, MovieThumb, MovieTitle } from "./styles";

type MovieProps = {
  movieId: string;
  title: string;
};

const MovieCard: React.FC<MovieProps> = ({ movieId, title }) => {
  return (
    <MovieContainer href={`/filme/${movieId}`}>
      <MovieThumb movieId={movieId} />
      <MovieTitle>{title}</MovieTitle>
    </MovieContainer>
  );
};

export default MovieCard;
