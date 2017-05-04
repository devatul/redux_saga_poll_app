import React from 'react';
import { Link } from 'react-router';
import ButtonDanger from '../button/buttondanger';
import ButtonSubmit from '../button/submit';
import ButtonDelete from '../button/delete';
import RadioButton from '../inputType/radioButton';
import Label from '../label/label';
import Heading from '../heading/heading';
import Badge from '../badge/badge';

const Modal = require('boron/DropModal');

export default class ViewPolls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_title: 'Not Yet Selected',
      selected_id: props.data._id,
      status: '',
    };
    this.handlePoll = this.handlePoll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  handlePoll(option, id, number) {
    this.setState({
      optionSelected: number,
      selected_id: id,
      selected_title: option,
    });
  }
  handleSubmit() {
    this.props.handleSubmit(this.state);
    this.setState({
      status: 'Submitted',
    });
    this.showModal();
  }
  handleDelete() {
    this.props.handleDelete(this.state.selected_id);
    this.setState({
      status: 'Deleted',
    });
    this.showModal();
  }
/*eslint-disable */
  showModal() {
    this.refs.modal.show();
  }
  hideModal() {
    this.refs.modal.hide();
  }

  render() {
   /* eslint no-underscore-dangle: [2, { "allow": ["_id"] }]*/
    const PollName = `Question ${this.props.queNo} : ${this.props.data.title}`;
    return (
      <div className="col-md-12 jumbotron" style={{ fontSize: 15 }}>
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="jumbotron">
            <div className="text-capitalize">
              <Heading head={PollName} />
            </div>
            {this.props.data.options.map((option, index) =>

              <div key={index} className="text-capitalize">
                <Label htmlfor="poll" text="Option" no={index + 1} /> :
                <RadioButton
                  radioButton={option.option}
                  id={this.props.data._id}
                  handlePoll={this.handlePoll}
                  number={index}
                />
                <Badge votes={option.vote} />
              </div>)
              }
            <div>
              <Label htmlfor="poll" text="Your Opinion" no=" " /> :
              <b className="text-capitalize">{this.state.selected_title}</b>
            </div>
            <div><br />
              <ButtonSubmit
                name="Submit" click={this.handleSubmit}
                className="btn btn-success"
              />
              <ButtonDanger name="Edit" classes="btn btn-warning" />
              <ButtonDelete
                name="Delete Poll" classes="btn btn-danger"
                click={this.handleDelete} id={this.props.data._id}
              />
            </div>
            <Modal ref="modal">
              <span>
                <center>
                  <h2 style={{ color: 'red' }}>
                    Congratulations...!! Poll has been {this.state.status} successfully..!
                  </h2>
                  <Link to="dashboard">
                    <button onClick={this.hideModal} className="btn-primary">close</button>
                  </Link>
                </center>
              </span>
            </Modal>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}
/* eslint-enable */
ViewPolls.propTypes = {
  data: React.PropTypes.isRequired,
  queNo: React.PropTypes.isRequired,
  handleSubmit: React.PropTypes.isRequired,
  handleDelete: React.PropTypes.isRequired,
};
