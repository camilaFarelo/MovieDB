import httpRequest from '../utils/http-request';
import Movies from '../constants/movies';

const getMovies = movies => (
  {
    type: Movies.FETCH_ALL,
    movies
  }
)

const getMovie = (movie, videos) => (
  {
    type: Movies.FETCH_MOVIE,
    movie,
    videos
  }
)


export function fetchMovies(type, page) {
  return async (dispatch) => {
    const movies = await httpRequest.get(`/movie/${type}`, {
      params: {
        page: page,
      }
    });
    dispatch(getMovies(movies.data));
  }
}

export function fetchMovie(id) {
  return async (dispatch) => {
    const movie = await httpRequest.get(`/movie/${id}`, {
      params: {
        append_to_response: 'credits,keywords,videos,reviews,similar,images,changes'
      }
    });
    dispatch(getMovie(movie.data));
  }
}

export function searchByText(value) {
  return async (dispatch) => {
    const movies = await httpRequest.get(`/search/movie`, {
      params: {
        query: value,
      }
    });
    dispatch(getMovies(movies.data));
  }
}
