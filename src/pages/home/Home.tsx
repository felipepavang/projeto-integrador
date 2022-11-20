import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { ScreenContainer } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <MovieCard movieId={"DrzWKWeg_PI"} title={"Mulheres rio acima"} />
    </ScreenContainer>
  );
};

export default HomeScreen;
