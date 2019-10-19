import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function Tag({ label }) {
  return <div className="tag">{label}</div>;
}

Tag.propTypes = { label: PropTypes.string.isRequired };

export default Tag;
