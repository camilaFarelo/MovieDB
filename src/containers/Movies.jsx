import React, {Component} from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MoviesPage from '../components/MoviesPage';

class Movies extends Component {
  state = {
    type: 'popular',
    page: 1,
  }

  componentDidMount = () => {
    this.props.actions.fetchMovies('popular');
  }
  handleFilterBy = (type) => {
    this.setState({type: type});
    this.props.actions.fetchMovies(type);
  }

  handleFilterByText = (e) => {
    if (e.target.value) {
      this.props.actions.searchByText(e.target.value);
    } else {
      this.props.actions.fetchMovies(this.state.type, this.state.page);
    }
  }
  handlePageChange = (newPage) => {
    this.setState({page: newPage})
    const type = this.state.type;
    this.props.actions.fetchMovies(type, newPage);
  }
  render(){
    console.log('1')
    const data = this.props.movies;
    return (
      <MoviesPage
        data={data}
        onFilterBy={this.handleFilterBy}
        onFilterByText={this.handleFilterByText}
        OnPageChange={this.handlePageChange} />
    )
  }
}

const mapStateProps = state => {
  const movieData = state.movies;
  const {movies} = movieData;
  return {
    movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect (mapStateProps, mapDispatchToProps)(Movies);
