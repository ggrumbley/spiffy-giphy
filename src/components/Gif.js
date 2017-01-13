import React, { PropTypes } from 'react'

const Gif = (image) => {
  return (
    <figure className='grid-figure'>
      <div className='grid-gif-wrap'>
        <img className='grid-gif'
              src={image.gif.images.downsized.url}
        />
      </div>
    </figure>

  )
};

export default Gif
