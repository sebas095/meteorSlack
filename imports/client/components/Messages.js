import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Message from './Message';

export default class Messages extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const messageList = ReactDOM.findDOMNode(this.refs.messageList);
    const maxScroll = $(messageList)[0].scrollWidth;
    messageList.scrollTop = maxScroll;
    $(messageList).animate({'scrollTop': maxScroll * 10}, 500);
  }

  render() {
    const messages = this.props.messages.map((message) => {
      return (
        <Message key={message._id} {...message} />
      );
    });

    return (
      <div ref='messageList' className='messages__message-list ui top attached segment'>
        {messages}
      </div>
    );
  }
}
