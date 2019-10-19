import React from 'react';
import Icons from '../assets/magnifier.svg';
import PropTypes from 'prop-types';

const MagnifierIcon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

MagnifierIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default MagnifierIcon;
