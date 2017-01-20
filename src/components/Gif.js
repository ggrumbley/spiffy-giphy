import React from 'react'

class Gif extends React.Component {
  constructor(props) {
    super(props)
    this.state = { favorited: this.props.isFavorite }
  }

  favoriteGif() {
    this.setState({ favorited: true })
    this.props.onFavoriteSelect(this.props.gif)
  }

  unfavoriteGif() {
    this.setState({ favorited: false })
    this.props.onFavoriteDeselect(this.props.gif)
  }

  renderFavoriteHeart = () => {
    if (!this.props.isAuthenticated) {
      return ''
    }

    if (this.state.favorited) {
      return <button className="favorite fa fa-heart" onClick={() => this.unfavoriteGif()} ></button>
    }

    return <button className="favorite fa fa-heart-o" onClick={() => this.favoriteGif()}></button>
  }

  render() {
    return (
      <figure className='grid-figure'>
        <div className='grid-gif-wrap'>
          <img className='grid-gif'
                src={this.props.gif.images.fixed_height_small.url}
                onClick={() => this.props.onGifSelect(this.props.gif)}
                alt="Gif"
          />
        </div>
        { this.renderFavoriteHeart() }
      </figure>
    )
  }
};

export default Gif
