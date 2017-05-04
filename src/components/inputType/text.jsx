import React from 'react';

const InputTypeText = ({ type, placeHolder, onchange }) => (
  <input
    type={type} className="form-control"
    placeholder={placeHolder} onChange={onchange} required
  />
);

export default InputTypeText;

InputTypeText.propTypes = {
  placeHolder: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  onchange: React.PropTypes.func.isRequired,
};
