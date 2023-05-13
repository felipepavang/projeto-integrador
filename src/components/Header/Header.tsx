import React from "react";
import {
  HeaderContainer,
  Logo,
  LinkContainer,
  ScreenContainer,
  StyledLink,
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ScreenContainer>
        <Logo>
          <StyledLink to={"/"}>CineAlt</StyledLink>
        </Logo>
        <LinkContainer>
          <StyledLink to={"/"}>INÍCIO</StyledLink>
          <StyledLink to={"/register-movie"}>CADASTRE UM FILME</StyledLink>
        </LinkContainer>
      </ScreenContainer>
    </HeaderContainer>
  );
};

export default Header;
