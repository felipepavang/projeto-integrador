import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #212529;
`;

export const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: -1px;
  color: #ffffff;
`;

export const LinkContainer = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  margin-left: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: #ffffff;
    text-decoration: none;
  }
`;
