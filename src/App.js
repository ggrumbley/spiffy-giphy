import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import GifGrid from './components/GifGrid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
    this._search = this._search.bind(this);
  }
  _search(term) {
    const url = `https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

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
        <GifGrid gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
