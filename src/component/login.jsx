import React from 'react';
import { Link } from 'react-router';
import styles from '../index.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const userName = this.state.username;
    const passWord = this.state.password;
    this.setState({
      loginStatus: true,
    });
    if (userName.length > 2 && passWord.length > 2) {
      this.props.login(userName, passWord);
    }
  }

  render() {
    // console.log(this.props, 'props of login');
    let buttonType = 'btn btn-success disabled';
    if (this.state.username.length > 2 && this.state.password.length > 2) {
      buttonType = 'btn-success';
    }
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

          <label htmlFor="username"><b>Username</b></label>
          <input
            type="text" placeholder="Enter Username" name="uname" required
            onChange={(event) => {
              this.setState({
                username: event.target.value,
              });
            }}
          />

          <label htmlFor="username"><b>Password</b></label>
          <input
            type="password" placeholder="Enter Password" name="psw" required
            onChange={(event) => {
              this.setState({
                password: event.target.value,
              });
            }}
          />

          <button type="submit" className={buttonType} onClick={this.handleSubmit}>
            Login
          </button>
          <Link to="signup">
            <button type="submit" className="btn-danger">Signup</button>
          </Link>
          <br /><br />
          <input type="checkbox" /> Remember me


        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
