import React, { PropTypes } from 'react'
import Gif from './Gif';

const GifGrid = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <Gif key={image.id} gif={image} />
  });

  return (
    <div className="gif-grid">
      {gifItems}
    </div>
  );
};

export default GifGrid ;
