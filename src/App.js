import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import request from 'superagent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }
  _search(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      console.log({ gifs: res.body.data });
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onTermChange={this._search} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
