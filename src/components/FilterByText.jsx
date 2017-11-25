import React from 'react';

const FilterByText = (props) => (

  <input
    className="search-input"
    type="text"
    onChange={props.onFilterByText}
    placeholder="Search for movie" />
)

export default FilterByText;
