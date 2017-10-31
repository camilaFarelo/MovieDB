import React from 'react';

const FilterByText = (props) => (

  <input
    className="search-input"
    type="text"
    onChange={props.onFilterByText}
    placeholder="Search by text" />
)

export default FilterByText;
