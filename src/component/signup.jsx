import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const response = axios.get('http://144.76.34.244:3333/list_users');
    console.log(response);
  }
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

            <button type="submit" onClick={() => { this.props.signup('trialuser', 'passwrd'); }}>Signup</button>
            <Link to="/">
              <button type="submit" className="btn-danger">Go back to Login page</button>
            </Link>
            <br /><br />
            <input type="checkbox" onClick={this.handleClick} /> Remember me
          </form>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
