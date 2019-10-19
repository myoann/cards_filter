import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import './index.scss';
import Card from '../Card/';

const mapStateToProps = ({ jsonResults }) => ({
  jsonResults: jsonResults.jsonResults,
});

export class CardsList extends Component {
  componentDidMount = () => {
    const { jsonResults, listJsonResults } = this.props;

    if (!jsonResults.length) {
      listJsonResults();
    }
  };

  render() {
    const { jsonResults, loading } = this.props;

    return (
      <main className="cardscontainer" role="list">
        {!loading &&
          jsonResults.map(({ _id, name, tags }, i) => (
            <Card key={i} _id={_id} name={name} tags={tags} />
          ))}
      </main>
    );
  }
}

CardsList.propTypes = {
  jsonResults: PropTypes.array,
  loading: PropTypes.bool,
  listJsonResults: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(CardsList);
