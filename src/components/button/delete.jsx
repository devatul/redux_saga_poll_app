import React from 'react';

const ButtonDelete = ({ name, classes = 'btn btn-default', click, id }) => (
  <button
    className={classes}
    onClick={click}
    value={id}
  >{name}</button>
);

export default ButtonDelete;

ButtonDelete.propTypes = {
  name: React.PropTypes.string.isRequired,
  classes: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
  id: React.PropTypes.isRequired,
};
