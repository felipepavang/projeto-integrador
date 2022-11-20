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
          <StyledLink to={"/"}>Logo</StyledLink>
        </Logo>
        <LinkContainer>
          <StyledLink to={"/"}>Início</StyledLink>
        </LinkContainer>
      </ScreenContainer>
    </HeaderContainer>
  );
};

export default Header;
