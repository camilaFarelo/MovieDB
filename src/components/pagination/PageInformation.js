import React from 'react';

const PageInformation = (props) => {
  console.log("PageInformation", props)
  return (
    <div className="pagination-information">
      <a>current page: {props.currentPage} | </a>
      <a>Total Pages: {props.totalPages} | </a>
      <a>Total Results: {props.totalResults}</a>
    </div>
  )
}

export default PageInformation;
