import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, withRouter } from 'react-router-dom';

import Tag from '../Tag/';
import './index.css';

function Card({ _id, name, tags }) {
  const history = useHistory();

  const routeChange = () => {
    const path = `#${_id}`;
    history.push(path);
  };

  return (
    <div className="card" onClick={() => routeChange()}>
      <div className="card__title">{name}</div>
      <div className="card__tags">
        {tags.map((tagLabel, i) => (
          <Tag key={i} label={tagLabel} />
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default withRouter(Card);
