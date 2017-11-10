import React, {Components} from 'react';

const BasicInformation = ({overview, budget, genres, duration, voteAverage, originalLanguage}) => {
  return (
    <div>
      <li><h3>{voteAverage}{'% Users Score'}</h3></li>
      <li>{overview}</li>
      <li><h3>Duration:</h3> {duration}</li>
      <li><h3>Genres:</h3></li>
      {genres.map(genre => {
        return (<li key={genre.name}><a>{genre.name}</a></li>)
        })}
      <li><h3>Original Language:</h3> {originalLanguage}</li>
    </div>
  )
}


export default BasicInformation;
