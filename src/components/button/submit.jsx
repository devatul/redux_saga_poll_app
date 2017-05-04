import React from 'react';

const ButtonSubmit = ({ name, click, className }) => (
  <button type="submit" className={className} onClick={click}>{name}</button>
);

export default ButtonSubmit;
