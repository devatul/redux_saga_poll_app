import React from 'react';

const LabelError = ({ htmlfor, text, no }) => (
  <label htmlFor={htmlfor} style={{ color: 'red', textTransform: 'uppercase' }} >{text} {no}</label>
);

export default LabelError;

LabelError.propTypes = {
  htmlfor: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  no: React.PropTypes.number.isRequired,
};
