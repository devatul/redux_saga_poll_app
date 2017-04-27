import React from 'react';

const buttonSubmit = ({ name, click, className }) => (
  <button type="submit" className={className} onClick={click}>{name}</button>
);

export default buttonSubmit;
