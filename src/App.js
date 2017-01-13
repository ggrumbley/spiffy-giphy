import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
    this._search = this._search.bind(this);
  }
  _search(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    fetch(url)
      .then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({ gifs: json.data })
        console.log(json.data);
      })

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
