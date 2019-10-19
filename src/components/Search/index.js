import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import './index.css';

function Search({ searchResults }) {
  return (
    <header className="searchbar">
      <span className="searchbar__iconbox">
        <MagnifierIcon className="searchbar__icon" />
      </span>
      <span className="searchbar__inputbox">
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          onChange={({ target: { value } }) => searchResults(value)}
        />
      </span>
    </header>
  );
}

Search.propTypes = {
  searchResults: PropTypes.func.isRequired,
};

export default connect(
  null,
  actions,
)(Search);
