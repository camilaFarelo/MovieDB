import React, {Components} from 'react';

const Pagination = ({page, totalPages, totalMovies}) => {
  return (
    <ul>
      <a>{page}</a>
      <a>Total Pages: {totalPages}</a>
      <a>Total Results: {totalMovies}</a>
    </ul>
  )
}


export default Pagination;
