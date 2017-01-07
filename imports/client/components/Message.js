import React, { Component } from 'react';

export default class Message extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='ui teal message'>
      <div className='header'>
        <h2>{this.props.user}</h2>
      </div>
      <p>{this.props.message}</p>
      </div>
    );
  }
}
