import React from 'react';
import { Link } from 'react-router';
import ButtonDanger from '../button/buttondanger';
import ButtonSubmit from '../button/submit';
import InputTypeText from '../inputType/text';
import Label from '../label/label';
import Heading from '../heading/heading';


export default class Login extends React.Component {
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
      this.props.userLoginRequest({ userName, passWord });
    }
  }

  render() {
    let buttonType = (<ButtonSubmit
      name="Login" click={this.handleSubmit}
      className="btn btn-success disabled"
    />);
    if (this.state.username.length > 2 && this.state.password.length > 2) {
      buttonType = (<ButtonSubmit
        name="Login" click={this.handleSubmit}
        className="btn btn-success"
      />);
    }
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">

          <Heading head="LOGIN" />
          <Label htmlfor="error" text={this.props.error} />
          <br />
          <Label htmlfor="username" text="User Name" />

          <InputTypeText
            type="text" placeHolder="Enter UserName" onchange={(event) => {
              this.setState({
                username: event.target.value,
              });
            }}
          />


          <Label htmlfor="password" text="Password" />

          <InputTypeText
            type="password" placeHolder="Enter Password" onchange={(event) => {
              this.setState({
                password: event.target.value,
              });
            }}
          />


          {buttonType}

          <Link to="signup">
            <ButtonDanger name="Signup" classes="btn btn-danger" />
          </Link>
          <br />


        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
Login.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
};
