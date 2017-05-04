import React from 'react';

const Label = ({ htmlfor, text, no }) => (
  <label htmlFor={htmlfor} >{text} {no}</label>
);

export default Label;

Label.propTypes = {
  htmlfor: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  no: React.PropTypes.number.isRequired,
};
