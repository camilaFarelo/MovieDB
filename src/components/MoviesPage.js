import React, {PureComponent} from 'react';
import FilterByType from './FilterByType';
import FilterByText from './FilterByText';
import MovieList from './MovieList';
import Pagination from './Pagination';

class MoviesPage extends PureComponent {
  handleFilterByType = (type) => {
    this.props.onFilterBy(type);
  }
  render () {
    console.log('DATA', this.props.data);
    const movies = this.props.data.results;
    const page = this.props.data.page;
    const totalPages = this.props.data.total_pages;
    const totalMovies = this.props.data.total_results;
    return(
      <div>
        <ul className="filters-nav">
          <FilterByType
            filterName={'POPULAR'}
            onFilterByType={this.handleFilterByType}
            type={'popular'}
          />
          <FilterByType
            filterName={'TOP RATED'}
            onFilterByType={this.handleFilterByType}
            type={'top_rated'}
          />
          <FilterByType
            filterName={'UPCOMING'}
            onFilterByType={this.handleFilterByType}
            type={'upcoming'}
          />
          <FilterByType
            filterName={'NOW PLAYING'}
            onFilterByType={this.handleFilterByType}
            type={'now_playing'}
          />
        </ul>
        <FilterByText onFilterByText={this.props.onFilterByText}/>
        <div className="movies-container">
          <h3>Popular Movies</h3>
          <MovieList movies={movies}/>
          <Pagination
            page={page}
            totalPages={totalPages}
            totalItems={totalMovies}
            pageRangeDisplayed={5}
            marginPagesDisplayed={3}
            breakLabel="..."
            OnPageChange={this.props.OnPageChange}
          />
        </div>
      </div>
    )
  }
 }

 export default MoviesPage;
