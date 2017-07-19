import React from 'react';
import Gif from './Gif';

const GifGrid = (props) => {
  const gifItems = props.gifs.map((image) => {
    return (
      <Gif
        key={image.id}
        gif={image}
        onGifSelect={props.onGifSelect}
        onFavoriteSelect={props.onFavoriteSelect}
        onFavoriteDeselect={props.onFavoriteDeselect}
        isAuthenticated={props.isAuthenticated}
        isFavorite={props.isFavorite} />
    );
  });

  return (
    <div className="gif-grid">
      {gifItems}
    </div>
  );
};

export default GifGrid;
