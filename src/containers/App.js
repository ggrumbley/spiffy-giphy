import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import GifGrid from '../components/GifGrid'
import GifModal from '../components/GifModal'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: null,
      modalIsOpen: false
    };
    this._search = this._search.bind(this);
  }

  _openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  _closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  _search(q) {
    const url = `https://api.giphy.com/v1/gifs/search?q=${q.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    fetch(url)
      .then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({ gifs: json.data })
      })
  }

  render() {
    return (
      <div>
        <h1>Spiffy Giphy</h1>
        <SearchBar query={this._search} />
        <GifGrid gifs={this.state.gifs}
                 onGifSelect={selectedGif => this._openModal(selectedGif) } />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={ () => this._closeModal()} />
      </div>
    );
  }
}

export default App;
