import React, {Components} from 'react';

const Keywords = ({keywords}) => {
  return (
    <div>
      <li><h3>keywords:</h3></li>
      {keywords.keywords.map(keyword => {
        return (<li key={keyword.name}><a>{keyword.name}</a></li>)
        })}
    </div>
  )
}


export default Keywords;
