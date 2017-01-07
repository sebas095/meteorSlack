import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
  constructor() {
    super();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const message = ReactDOM.findDOMNode(this.refs.inputMessage).value.trim();
    this.props.onSendMessage(message);
    ReactDOM.findDOMNode(this.refs.inputMessage).value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="inputMessage" type="text" />
        </form>
      </div>
    );
  }
}
