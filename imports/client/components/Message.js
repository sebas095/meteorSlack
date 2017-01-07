import React, { Component } from 'react';

export default class Message extends Component {
  constructor() {
    super();
  }

  render() {
    const imageSize = {
      width: '5%',
      marginRight: '2%'
    };

    const messageAlign = {
      textAlign: 'left'
    }

    return (
      <div className='ui teal icon message'>
      <img style={imageSize} src={this.props.userImg} alt={this.props.userImg} />
      <div style={messageAlign} className='content'>
        <div className='header'>
          <h2>{this.props.user}</h2>
        </div>
        <p>{this.props.message}</p>
      </div>
      </div>
    );
  }
}
