import React from 'react';
import HelloWorld from '../dumpHello';

export class Dashboard extends React.Component {

  render() {
    return (
      <div className="jumbotron" >
        <center>
          <h2>
            {HelloWorld({ name: 'user' })}
          </h2>
        </center>
      </div>
    );
  }
}
