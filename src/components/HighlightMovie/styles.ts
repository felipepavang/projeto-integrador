import styled from "styled-components";

type ImageProps = {
  movieId?: string;
};

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: 48px 0px;
`;

export const MovieCover = styled.div<ImageProps>`
  width: 645px;
  height: 349px;
  background-image: ${(movieId) =>
    `url('https://img.youtube.com/vi/${movieId.movieId}/hqdefault.jpg')`};
  background-repeat: no-repeat;
  background-size: contain;
`;

export const DataContainer = styled.div`
  box-sizing: border-box;
  width: 80%;
  padding: 16px;
`;

export const MovieTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
`;

export const MovieDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MovieGeneralInfo = styled.div``;

export const ReleaseYear = styled.p`
  span {
    font-weight: bold;
  }
`;

export const Category = styled.p`
  span {
    font-weight: bold;
  }
`;

export const Director = styled.p`
  span {
    font-weight: bold;
  }
`;
