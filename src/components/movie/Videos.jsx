import React, {Components} from 'react';

const Videos = ({videos}) => {
  return (
    <div>
      {videos.map(video => {
        return (
          <div key={video.id}>
            {video.type === 'Trailer' &&
              <iframe
                key={video.id}
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
