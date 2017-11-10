import React, {Component} from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Videos from '../components/movie/Videos';
import Keywords from '../components/movie/Keywords';
import MovieDetails from '../components/movie/MovieDetails';

class Movie extends Component {

  componentWillMount = () => {
    const {id} = this.props.match.params;
    this.props.actions.fetchMovie(id);
  }
  render() {
    const {movie} = this.props;
    console.log("movie", movie);
    return (
      movie && <MovieDetails movie={movie} />
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
