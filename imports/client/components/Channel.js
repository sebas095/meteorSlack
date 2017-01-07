import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Channel extends Component {
  constructor() {
    super();
  }

  handleClick() {
    const channel = ReactDOM.findDOMNode(this.refs.inputChannel).innerHTML;
    this.props.onChangeChannel(channel);
  }

  render() {
    return (
      <a onClick={this.handleClick.bind(this)}>
        <span>#</span>
        <span ref='inputChannel'>{this.props.name}</span>
      </a>
    );
  }
}
