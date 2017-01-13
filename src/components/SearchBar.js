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
      <div>
        <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
        <input className="form-control"
         onChange={event => this._searchData(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
