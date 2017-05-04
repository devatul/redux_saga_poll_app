import React from 'react';
import Heading from '../heading/heading';

function Header(props) {
  return (
    <div>
      <h1><Heading head="Polling Management System" /> </h1>
      {React.cloneElement(props.children, props)}
    </div>
  );
}
export default Header;


Header.propTypes = {
  children: React.PropTypes.func.isRequired,
};
