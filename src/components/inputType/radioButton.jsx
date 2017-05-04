import React from 'react';

const InputTypeRadio = ({ radioButton, id, handlePoll, number }) =>
   (
     <span>
       <input
         type="radio"
         name={id}
         value={radioButton}
         onClick={(e) => {
           handlePoll(e.target.value, id, number);
         }}
       />{radioButton}
     </span>
  );

export default InputTypeRadio;

InputTypeRadio.propTypes = {
  radioButton: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  handlePoll: React.PropTypes.isRequired,
  number: React.PropTypes.isRequired,
};
