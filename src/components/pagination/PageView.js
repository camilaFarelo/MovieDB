import React from 'react';

const PageView = (props) => {
  const onClick = props.onClick;

  return (
      <li>
          <a onClick={onClick}
             tabIndex="0"
             onKeyPress={onClick}>
            {props.page}
          </a>
      </li>
  )
}

export default PageView;
