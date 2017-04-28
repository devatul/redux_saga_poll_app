import React from 'react';

export class Dashboard extends React.Component {

  render() {
    return (
      <div className="jumbotron" >
        <center>
          <h2>
            hello
          </h2>
        </center>
        <button className="btn btn-success" onClick={() => { this.props.dataPollingRequest(); }} > submit </button>
      </div>
    );
  }
}
