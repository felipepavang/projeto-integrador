import React from "react";
import {
  Category,
  Container,
  DataContainer,
  Director,
  MovieCover,
  MovieDescription,
  MovieGeneralInfo,
  MovieTitle,
  ReleaseYear,
} from "./styles";

type MovieProps = {
  movieId: string;
  title: string;
  description: string;
  releaseYear: string;
  category: string;
  director: string;
};

const HighlightMovie: React.FC<MovieProps> = ({
  movieId,
  title,
  description,
  releaseYear,
  category,
  director,
}) => {
  return (
    <Container>
      <MovieCover movieId={movieId} />
      <DataContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieDescription>{description}</MovieDescription>
        <MovieGeneralInfo>
          <ReleaseYear>
            <span>Ano:</span> {releaseYear}
          </ReleaseYear>
          <Category>
            <span>Gêneros:</span> {category}
          </Category>
          <Director>
            <span>Diretor:</span> {director}
          </Director>
        </MovieGeneralInfo>
      </DataContainer>
    </Container>
  );
};

export default HighlightMovie;
