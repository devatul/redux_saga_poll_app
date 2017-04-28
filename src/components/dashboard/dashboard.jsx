import React from 'react';
import Heading from '../heading/heading';
import TableRow from '../viewPolls/tableRow';

export class Dashboard extends React.Component {

  render() {
    console.log(this.props.login.userLogin.data.data.username);
    const Greeting = `Hello ${this.props.login.userLogin.data.data.username}`;
    return (
      <div className="jumbotron" >

        <h2 className="text-capitalize">
          <Heading head={Greeting} />
        </h2>

        <TableRow />

        <div>
          <button
            className="btn btn-success"
            onClick={() => { this.props.dataPollingRequest(); }}
          > View Polls </button>
        </div>
      </div>
    );
  }
}
