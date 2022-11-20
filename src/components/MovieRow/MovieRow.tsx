import React from "react";
import { Movie } from "../../pages/home/Home";
import MovieCard from "../MovieCard/MovieCard";
import { CardContainer, RowContainer, RowTitle } from "./styles";

type RowProps = {
  title: string;
  movies: Movie[];
};

const MovieRow: React.FC<RowProps> = ({ title, movies }) => {
  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <CardContainer>
        {movies.map((movie, index) => (
          <MovieCard key={index} movieId={movie.id} title={movie.titulo} />
        ))}
      </CardContainer>
    </RowContainer>
  );
};

export default MovieRow;
