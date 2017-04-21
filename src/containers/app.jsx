import React from 'react';
import styles from '../index2.scss';

export class App extends React.Component {
  render() {
    return (
      <div className={styles.reactbody}>
        <center>
          <h1>Poll Management System </h1>
        </center>
        {React.cloneElement(this.props.children, this.props)}

      </div>
    );
  }
}
