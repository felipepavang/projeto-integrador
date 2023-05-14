import {http} from "../utils/http-common";

export default class MovieService {
  findAllMovies() {
    return http.get("/filmes");
  }

  findMovieById(id: string) {
    return http.get(`/filme/${id}`);
  }

}
