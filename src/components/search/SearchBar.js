import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search } from "../../redux/actions/index";

/**
 * search box value to the action index file to render the data
 */

class SearchBar extends Component {
  render() {
    const { search, searchValue } = this.props;

    return (
      <div>
        <input
          className='form-control search-box'
          placeholder='Search book by title...'
          onChange={event => search(event.target.value)}
          value={searchValue}
        />
      </div>
    );
  }
}

function mapStateToProps({ books }) {
  return { searchValue: books.searchValue };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
