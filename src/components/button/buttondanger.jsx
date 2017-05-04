import React from 'react';

const ButtonDanger = ({ name, classes = 'btn btn-default' }) => (
  <button className={classes}>{name}</button>
);

export default ButtonDanger;

ButtonDanger.propTypes = {
  name: React.PropTypes.string.isRequired,
  classes: React.PropTypes.string.isRequired,
};
