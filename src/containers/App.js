import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from '../actions'
import SearchBar from '../components/SearchBar'
import GifGrid from '../components/GifGrid'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Spiffy Giphy</h1>
        <SearchBar query={this.props.actions.requestGifs} />
        <GifGrid gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
