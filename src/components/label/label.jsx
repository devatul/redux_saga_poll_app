import React from 'react';

const Label = ({ htmlfor, text, no }) => (
  <label htmlFor={htmlfor} >{text}{no}</label>
);

export default Label;
