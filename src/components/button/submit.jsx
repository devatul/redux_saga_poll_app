import React from 'react';

const ButtonSubmit = ({ name, click, className }) => (
  <button type="submit" className={className} onClick={click}>{name}</button>
);

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
};
