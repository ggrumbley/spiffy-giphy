import React, { PropTypes } from 'react'

const GifItem = (image) => {
  return (
    <li className="col-md-3 thumbnail">
      <img src={image.gif.images.downsized.url} />
    </li>
  )
};

export default GifItem
