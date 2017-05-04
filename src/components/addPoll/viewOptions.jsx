import React from 'react';

function ViewOptions(props) {
  /*eslint-disable */
  return (
    <div>
      {props.options.map((OptionList, index) => <div key={index}>
        {OptionList}
      </div>)}
    </div>
  );
  /*eslint-enable */
}
export default ViewOptions;

ViewOptions.propTypes = {
  options: React.PropTypes.isRequired,
};
