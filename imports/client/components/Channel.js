import React, { Component } from 'react';

export default class Channel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a>
        <span>#</span>
        <span>{this.props.name}</span>
      </a>
    );
  }
}
