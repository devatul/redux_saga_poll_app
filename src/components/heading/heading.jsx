import React from 'react';

const Heading = ({ head }) => (
  <center>
    <div>
      <b>
        {head}
      </b>
    </div>
  </center>
);

export default Heading;

Heading.propTypes = {
  head: React.PropTypes.string.isRequired,
};
