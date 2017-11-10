import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
  onNextPage = (page, OnPageChange) => {
    const newPage = page + 1;
    this.props.OnPageChange(newPage);
  }
  onBackPage = (page, OnPageChange) => {
    const newPage = page - 1;
    this.props.OnPageChange(newPage);
  }
  onPageSelected = (page) => {
    console.log(page);
    this.props.OnPageChange(page);
  }
  render() {
    const {page} = this.props;
    const {totalPages} = this.props;
    const {totalItems} = this.props;
    const {pageRangeDisplayed} = this.props;
    const styles = {
      padding: 10,
      cursor: 'pointer',
    }
    const pages = Array(totalPages).fill(1).map((v, i) => v + i);
    return (
      <ul>
        <li><a onClick={() => this.onBackPage(page)}>BACK</a></li>
        <a>page: {page} | </a>
        {pages.map(page => {
          return (
            <a
              key={page}
              style={styles}
              onClick={() => this.onPageSelected(page)}>{page}</a>
          )
        })}
        <a>Total Pages: {totalPages} | </a>
        <a>Total Results: {totalItems}</a>
        <li><a onClick={() => this.onNextPage(page)}>NEXT</a></li>
      </ul>
    )
  }
}
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
}

export default Pagination;
