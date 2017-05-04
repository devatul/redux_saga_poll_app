import React from 'react';

import Signup from '.././../components/signup/signup';

function SignupContainer(props) {
  return (
    <Signup
      {...props}
    />
  );
}
export default SignupContainer;

SignupContainer.propTypes = {
  // SignupContainer: React.PropTypes.isRequired,
};
