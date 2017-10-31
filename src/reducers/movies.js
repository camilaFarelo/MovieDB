import Movies from '../constants/movies'
const initialState = {
  movies: {
    results: [],
  },
  movie: {
    genres: [],
    videos: [],
    keywords: {
      keywords: [],
    },
    credits: {
      crew: [],
    },
  }
}
export default (state=initialState, action) => {
  switch (action.type) {
    case Movies.FETCH_ALL:
    const movies = action.movies;
      return {
        ...state,
        movies
      };

    case Movies.FETCH_MOVIE:
    const movie = action.movie;
    const videos = movie.videos.results;
      return {
        ...state,
        movie: {
          ...movie,
          videos
        }
      };

    default:
      return state;
  }
}
