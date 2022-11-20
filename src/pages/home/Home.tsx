import React from "react";
import Header from "../../components/Header/Header";
import { ScreenContainer } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <>
      <Header />
      <ScreenContainer></ScreenContainer>
    </>
  );
};

export default HomeScreen;
