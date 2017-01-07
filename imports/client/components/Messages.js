import React, { Component } from 'react';

import Message from './Message';

export default class Messages extends Component {
  constructor() {
    super();
  }

  render() {
    const messages = this.props.messages.map((message) => {
      return (
        <Message key={message._id} {...message} />
      );
    });

    return (
      <div className='ui top attached segment'>
        {messages}
      </div>
    );
  }
}
