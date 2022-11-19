import http from "../http-common";

export default class MovieService {
  findAllMovies() {
    return http.get("/filmes");
  }

  findMovieById(id: string) {
    return http.get(`/filme/${id}`);
  }
}
