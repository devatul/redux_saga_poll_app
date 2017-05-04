/* eslint no-underscore-dangle: [2, { "allow": ["_id"] }]*/
import React from 'react';
import ButtonDanger from '../button/buttondanger';
import ButtonSubmit from '../button/submit';
import ButtonDelete from '../button/delete';
import RadioButton from '../inputType/radioButton';
import Label from '../label/label';
import Heading from '../heading/heading';
import Badge from '../badge/badge';

export default class ViewPolls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_title: 'Not Yet Selected',
      selected_id: props.data._id,
    };
    this.handlePoll = this.handlePoll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  }
  handleDelete() {
    this.props.handleDelete(this.state.selected_id);
  }
  /*eslint-disable */
  render() {
    const PollName = `Question ${this.props.queNo} : ${this.props.data.title}`;
    return (
      <div className="col-md-12 jumbotron" style={{ fontSize: 15 }}>
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="jumbotron">
            <div className="text-capitalize">
              <Heading head={PollName} />
            </div>
            <div key={this.props.queNo}>
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
                </div>,
              )}
            </div>
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
                click={this.handleDelete}
              />
            </div>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}
/*eslint-enable */
ViewPolls.propTypes = {
  data: React.PropTypes.isRequired,
  queNo: React.PropTypes.number.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleDelete: React.PropTypes.func.isRequired,
};
