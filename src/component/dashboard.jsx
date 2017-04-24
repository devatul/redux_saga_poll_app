import React from 'react';

export class Dashboard extends React.Component {

  render() {
    return (
      <div className="jumbotron" >
        <center>
          <h2>
            Welcome {this.props.loginabc.data.username}
          </h2>
        </center>
      </div>
    );
  }
}
