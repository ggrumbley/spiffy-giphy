import React, { PropTypes } from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: ''}
  }

  _searchData(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }
  render () {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="well bs-component">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
                <input className="form-control"
                       onChange={event => this._searchData(event.target.value)} />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
