import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg';
import './index.scss';

function Search({ searchResults }) {
  return (
    <header className="searchbar">
      <span
        className="searchbar__iconbox"
        role="img"
        aria-label="Icone d'une loupe"
      >
        <MagnifierIcon className="searchbar__icon" />
      </span>
      <form
        className="searchbar__inputbox"
        role="search"
        aria-label="Sur cette page"
      >
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          onChange={({ target: { value } }) => searchResults(value)}
          spellcheck="false"
        />
      </form>
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
