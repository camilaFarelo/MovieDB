import React, {Components} from 'react';

const Videos = ({videos}) => {
  return (
    <div>
      {videos.map(video => {
        return (
          <div key={video.key}>
            {video.type === 'Trailer' &&
              <iframe
                width="420"
                height="315"
                src={'https://www.youtube.com/embed/' + video.key}>
              </iframe>
            }
          </div>
        )
      })}
    </div>

  )
}


export default Videos;
