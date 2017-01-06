import React, { Component } from 'react';

import Message from './Message';

export default class Messages extends Component {
  constructor() {
    super();
  }

  render() {
    const message = {
      user: 'El usuario',
      message: 'El Mensaje'
    };

    return (
      <div>
        <Message {...message} />
        <Message {...message} />
        <Message {...message} />
      </div>
    );
  }
}
