import React from 'react'

const Gif = ({gif, onGifSelect}) => {
  return (
    <figure className='grid-figure' onClick={() => onGifSelect(gif)}>
      <div className='grid-gif-wrap'>
        <img className='grid-gif'
              src={gif.images.downsized.url}
              alt="Gif"
        />
      </div>
    </figure>

  )
};

export default Gif
