import React, {Component} from 'react';
import MovieList from '../components/MovieList';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FilterByText from '../components/FilterByText';
import Pagination from '../components/Pagination';

class Movies extends Component {
  state = {
    type: 'popular',
    page: 1,
  }

  componentDidMount = () => {
    this.props.actions.fetchMovies('popular');
  }
  filterBy = (type) => {
    this.setState({type: type});
    this.props.actions.fetchMovies(type);
  }
  onNextPage = (event) => {
    const newPage = this.state.page + 1;
    const type = this.state.type;
    this.setState({page: newPage})
    this.props.actions.fetchMovies(type, newPage);
  }
  onBackPage = (event) => {
    const newPage = this.state.page - 1;
      this.setState({page: newPage})
      const type = this.state.type;
      this.props.actions.fetchMovies(type, newPage);
  }
  handleFilterByText = (e) => {
    if (e.target.value) {
      this.props.actions.searchByText(e.target.value);
    } else {
      this.props.actions.fetchMovies(this.state.type, this.state.page);
    }
  }

  render(){
    const movies = this.props.movies.results;
    const page = this.props.movies.page;
    const totalPages = this.props.movies.total_pages;
    const totalMovies = this.props.movies.total_results;
    console.log("TOTALPAGE", this.props)
    return (
      <div>
        <ul>
          <li><a onClick={() => this.filterBy('popular')}>POPULAR</a></li>
          <li><a onClick={() => this.filterBy('top_rated')}>TOP RATED</a></li>
          <li><a onClick={() => this.filterBy('upcoming')}>UPCOMING</a></li>
          <li><a onClick={() => this.filterBy('now_playing')}>NOW PLAYING</a></li>
        </ul>
        <FilterByText onFilterByText={this.handleFilterByText} />
        {movies.map(movie => (
          <MovieList movie={movie} key={movie.id}/>
        ))}
        <li><a onClick={(event) => this.onBackPage(event)}>BACK</a></li>
        <Pagination page={page} totalPages={totalPages} totalMovies={totalMovies} />
        <li><a onClick={(event) => this.onNextPage(event)}>NEXT</a></li>
      </div>
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
