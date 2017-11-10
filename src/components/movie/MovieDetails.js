import React from 'react';
import PropTypes from 'prop-types';
import BasicInformation from './BasicInformation';
import Videos from './Videos';
import Keywords from './Keywords';


function currencyBudge(budget){
  if (budget) {
   return budget.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
}
const MovieDetails = ({movie}) => {
  const year = new Date(movie.release_date);
  const voteAverage = (movie.vote_average * 10);
  const duration = (movie.runtime/60);
  return (
    <div>
      <ul>
        <li>{movie.title} {year.getFullYear()}</li>
        <li>
          <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}/>
        </li>
        <BasicInformation
          overview={movie.overview}
          genres={movie.genres}
          duration={duration}
          voteAverage={voteAverage}
          originalLanguage={movie.original_language}
        />
        <li><h3>budget:</h3> {currencyBudge(movie.budget)}</li>
        <li><h3>revenue:</h3> {currencyBudge(movie.revenue)}</li>
        <Keywords keywords={movie.keywords} />
        <Videos videos={movie.videos} />
        <li><h3>Overview</h3>{movie.overview}</li>
      </ul>
    </div>
  )
}
MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
}
export default MovieDetails;
