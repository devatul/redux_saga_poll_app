import React from 'react';
import Heading from '../heading/heading';
import TableRow from '../viewPolls/tableRow';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderOrNot: 1,
    };
  }

  render() {
    const Greeting = `Hello ${this.props.login.userLogin.data.data.username}`;

    return (

      <div>

        <h2 className="text-capitalize">
          <Heading head={Greeting} />
        </h2>

        <div>
          <button
            className="btn btn-success"
            onClick={() => { this.props.dataPollingRequest(); }}
          > View Polls </button>
        </div>
        <TableRow {...this.props} />
      </div>
    );
  }
  }

Dashboard.propTypes = {
  login: React.PropTypes.isRequired,
  dataPollingRequest: React.PropTypes.func.isRequired,
};
