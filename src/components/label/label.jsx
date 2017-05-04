import React from 'react';

const Label = ({ htmlfor, text }) => (
  <label htmlFor={htmlfor} >{text}</label>
);

export default Label;
