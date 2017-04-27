import React from 'react';
import Heading from '../heading/heading';

export class Dashboard extends React.Component {

  render() {
    return (
      <div className="jumbotron" >

        <h2>
          <Heading head="Hello" />
        </h2>

      </div>
    );
  }
}
