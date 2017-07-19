import React from 'react';

class SearchBar extends React.Component {

  _query(term) {
    this.props.query(term);
  }

  render () {
    return (
      <div className="search-bar">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input type="search"
                 placeholder="Search Giphy..."
                 onChange={event => this._query(event.target.value)} />
        </form>

      </div>
    );
  }
}

export default SearchBar;
