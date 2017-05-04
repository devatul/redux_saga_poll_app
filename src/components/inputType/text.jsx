import React from 'react';

const InputTypeText = ({ type, placeHolder, onchange }) => (
  <input type={type} className="form-control" placeholder={placeHolder} onChange={onchange} required />
);

export default InputTypeText;
