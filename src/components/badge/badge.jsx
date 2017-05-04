import React from 'react';

const Badge = ({ votes }) => (
  <span className="badge pull-right">{votes}</span>
);

export default Badge;

Badge.propTypes = {
  votes: React.PropTypes.number.isRequired,
};
