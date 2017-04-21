import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export class Signup extends React.Component {
 
  render() {
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">
          <center>
            <div>
              <b>
                Create New Account
              </b>
            </div>
          </center>
          <form>
            <label htmlFor="username"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label htmlFor="username"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label htmlFor="username"><b>Confirm Password</b></label>
            <input type="password" placeholder="Re-Enter Password" name="pswcnfrm" required />

            <button type="submit">Signup</button>
            <Link to="/">
              <button type="submit" className="btn-danger">Go back to Login page</button>
            </Link>
            <br /><br />
            <input type="checkbox"/> Remember me
          </form>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
