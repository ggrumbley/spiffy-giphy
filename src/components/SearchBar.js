import React, { PropTypes } from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: ''}
  }

  _searchData(term) {
    this.setState({term});
    this.props.query(term);
  }
  render () {
    return (
      <div className="search-bar">
        <form className="search-form">
          <input type="search"
          placeholder="Search Giphy..."
           onChange={event => this._searchData(event.target.value)} />
        </form>
      </div>

    );
  }
}

export default SearchBar;
