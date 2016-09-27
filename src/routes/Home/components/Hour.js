import React from 'react'

export default class Hour extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <tr>
          <td className="hour">{this.props.time}</td>
          <td ></td>
          <td ></td>
          <td className="active"></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
        </tr>
    );
  }
};
