import React from 'react';

const InputTypeRadio = ({ radioButton }) => (
  <span>
    <input type="radio" name={radioButton} />{radioButton}
  </span>
);

export default InputTypeRadio;
