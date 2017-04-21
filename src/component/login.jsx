import React from 'react';
import { Link } from 'react-router';
import styles from '../index2.scss';

export class Login extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">
          <center>
            <div>
              <b>
                LOGIN
              </b>
            </div>
          </center>
          <form>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="username"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" onClick={() => { this.props.login('abd', 123); }} >Login</button>
            <Link to="signup">
              <button type="submit" className="btn-danger">Signup</button>
            </Link>
            <br /><br />
            <input type="checkbox" /> Remember me
          </form>

        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
