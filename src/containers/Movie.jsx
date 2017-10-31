import React, {Component} from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Videos from '../components/movie/Videos';
import Keywords from '../components/movie/Keywords';
import BasicInformation from '../components/movie/BasicInformation';

class Movie extends Component {

  componentWillMount = () => {
    const {id} = this.props.match.params;
    this.props.actions.fetchMovie(id);
  }
  render() {
    const {title,
          overview,
          videos,
          poster_path,
          genres,
          keywords,
          revenue,
          budget,
          credits,
          release_date,
          vote_average,
          runtime,
          original_language} = this.props.movie;
    const year = new Date(release_date);
    const voteAverage = (vote_average * 10);
    const duration = (runtime/60);
    function currencyBudge(budget){
      if (budget) {
       return budget.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
    }
    console.log('MOVIE', this.props);
    return (
      <div>
        <ul>
          <li>{title} {year.getFullYear()}</li>
          <li>
            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path}/>
          </li>
          <BasicInformation
            overview={overview}
            genres={genres}
            duration={duration}
            voteAverage={vote_average}
            originalLanguage={original_language}
          />
          <li><h3>budget:</h3> {currencyBudge(budget)}</li>
          <li><h3>revenue:</h3> {currencyBudge(revenue)}</li>
          <Keywords keywords={keywords} />
          <Videos videos={videos} />
          <li><h3>Overview</h3>{overview}</li>
        </ul>
      </div>
    )
  }
}
const mapStateProps = state => {
  const movieData = state.movies;
  const {movie} = movieData;
  return {
    movie
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Movie);
