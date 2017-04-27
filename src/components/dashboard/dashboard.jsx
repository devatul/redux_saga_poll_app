import React from 'react';
import heading from '../Heading/heading';

export class Dashboard extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className="jumbotron" >

        <h2>
          { heading({ value: 'Hello' })}
        </h2>

      </div>
    );
  }
}
