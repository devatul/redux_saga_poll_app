import React from 'react';
import update from 'immutability-helper';
import { Link } from 'react-router';
import ButtonSubmit from '../button/submit';
import InputTypeText from '../inputType/text';
import Label from '../label/label';
import Heading from '../heading/heading';
import ViewOptions from './viewOptions';

const Modal = require('boron/DropModal');

let id = 0;
let Options = [];
let warning = 'Add Option';
let buttonClass = 'btn-primary pull-right btn';

export default class AddPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      options: [],
      warning: '',
      inputValidate: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOption = this.addOption.bind(this);
    this.handleOpt = this.handleOpt.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const options = this.state.options;
    if (title.length > 2 && options.length > 2) {
      this.props.addNewPollRequest({ title, options });
      this.showModal();
    } else {
      this.setState({ warning: '(Fields are empty and Minimum 2 Options Are To Be Added)' });
    }
  }
  handleOpt(event, i) {
    const a = this.state.options;
    a[i] = event.target.value;
    this.setState({ options: a });
  }
  addOption() {
    id += 1;
    const optionNumber = `Option ${id}`;
    const inputTypeAdd = (
      <div className="form-group">

        <Label htmlfor="newpoll" text={optionNumber} />

        <InputTypeText
          type="text" placeHolder={optionNumber} id={id} onchange={(event) => {
            this.handleOpt(event, this.state.Options.length - 1);
          }}
        />

      </div>);
    const initialArray = Options;
    if (initialArray.length < 5) {
      const newArray = update(initialArray, { $push: [inputTypeAdd] });
      Options = newArray;
      this.setState({ Options });
    } else {
      warning = 'Limit Exceeded';
      buttonClass = 'btn-danger pull-right btn';
      this.setState({ th: 'th' });
    }
  }
    /*eslint-disable */
  showModal() {
    this.refs.modal.show();
  }
  hideModal() {
    this.refs.modal.hide();
  }

  render() {

    let buttonType = (<ButtonSubmit
      name="Add Poll" click={this.handleSubmit}
      className="btn btn-success disabled"
    />);
    if (this.state.title.length > 2) {
      buttonType = (<ButtonSubmit
        name="Add Poll" click={this.handleSubmit}
        className="btn btn-success"
      />);
    }
    return (
      <div className="container">
        <div className="col-md-3" />
        <div className="col-md-6">

          <Heading head="Add Poll" />
          <Label htmlfor="error" text={''} /> <br />
          <Label htmlfor="add" text="Add Title" />
          <div className="form-group">
            <InputTypeText
              type="text" placeHolder="Title" onchange={(event) => {
                this.setState({
                  title: event.target.value,
                });
              }}
            />
          </div>
          <div>
            <ViewOptions options={Options} />
          </div>
          <Label htmlfor="Option" text="Option" />

          <input type="button" className={buttonClass} value={warning} onClick={this.addOption} />

          <Modal ref="modal">
            <span>
              <center>
                <h2 style={{ color: 'red' }}>
                  Congratulations...!! Poll has been added successfully..!
                </h2>
                <Link to="dashboard">
                  <button onClick={this.hideModal} className="btn-primary">close</button>
                </Link>
              </center>
            </span>
          </Modal>
          {buttonType}
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}
  /*eslint-enable */

AddPoll.propTypes = {
  addNewPollRequest: React.PropTypes.isRequired,
};
