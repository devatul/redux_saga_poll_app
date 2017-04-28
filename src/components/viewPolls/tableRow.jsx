import React from 'react';
import ViewPolls from './viewPolls';

export const data = [
  { _id: '58dbf2978c3f2d4f756c7e73',
    title: 'who is better',
    options: [{ option: 'ronaldo', vote: 4 },
                  { option: 'messi', vote: 2 },
                  { option: 'ibrahim', vote: 1 },
                  { option: 'shivesh', vote: 1 }],
    __v: 0 },
  { _id: '58dc94298c3f2d4f756c7e7f',
    title: 'fdsdfs',
    options: [{ option: 'sdfdsf', vote: 1 },
            { option: 'dsfds', vote: 1 },
            { option: 'sddsf', vote: 2 },
            { option: 'sdd', vote: 2 }],
    __v: 0 },
];
export default class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: data,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          {data.map((person, i) => <ViewPolls key={i} data={person} />)}
        </div>
      </div>
    );
  }
}
