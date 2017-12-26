import React, {Components} from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  )
}

export default MovieList;
