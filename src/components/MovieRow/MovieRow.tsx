import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { CardContainer, RowContainer, RowTitle } from "./styles";

type Movie = {
  id: string;
  title: string;
};

type RowProps = {
  title: string;
  movies: Movie[];
};

const MovieRow: React.FC<RowProps> = ({ title, movies }) => {
  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <CardContainer>
        {movies.map((movie) => (
          <MovieCard movieId={movie.id} title={movie.title} />
        ))}
      </CardContainer>
    </RowContainer>
  );
};

export default MovieRow;
