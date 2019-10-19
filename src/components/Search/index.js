import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import './index.css';

function Search({ searchResults }) {
  return (
    <div className="searchBar">
      <span className="searchIconBox">
        <MagnifierIcon className="magnifierIcon" />
      </span>
      <span className="searchInputBox">
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          onChange={({ target: { value } }) => searchResults(value)}
        />
      </span>
    </div>
  );
}

Search.propTypes = {
  searchResults: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(Search);
