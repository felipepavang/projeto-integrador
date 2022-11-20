import styled from "styled-components";

type ImageProps = {
  movieId: string;
};

export const MovieContainer = styled.a`
  width: 272px;
  height: 153px;
  text-decoration: none;
  text-transform: capitalize;
`;

export const MovieThumb = styled.div<ImageProps>`
  width: 272px;
  height: 153px;
  border-radius: 8px;
  background-image: ${(movieId) =>
    `url('https://img.youtube.com/vi/${movieId.movieId}/hqdefault.jpg')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 5px 0px #00000075;
`;

export const MovieTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.4px;
  color: #000;
`;
