import React from 'react';
import heading from '../Heading/heading';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>
          { heading({ value: 'Poll Management System' })}
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
