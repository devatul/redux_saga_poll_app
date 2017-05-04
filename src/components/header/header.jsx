import React from 'react';
import Heading from '../heading/heading';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Heading head="Poll Management System" />
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
