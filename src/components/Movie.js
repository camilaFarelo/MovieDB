import React from 'react';

const Movie = ({movie}) => {
  return (
    <ul>
      <li><a href={'/' + movie.id}>{movie.title}:{movie.release_date}</a></li>
      <li>
        <a href={'/' + movie.id}>
          <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}/>
        </a>
      </li>
      <li><a>{movie.overview}</a></li>
    </ul>
  )
}

export default Movie;
