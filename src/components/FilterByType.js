import React from 'react';
import radium from 'radium';

const styles = {
  color: '#dedede',
  cursor: 'pointer',
  ':hover': {
    color: '#000',
  },
  '@media (max-width: 700px)': {
    color: '#fff',
  },
}

const FilterByType = ({filterName, onFilterByType, type}) => {
  return (
    <li>
      <a style={styles}onClick={(e) => onFilterByType(type)}>{filterName}</a>
    </li>
  )
}

export default radium(FilterByType);
