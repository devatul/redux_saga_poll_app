import React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>
            Poll Management System
          </h1>
        </center>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
