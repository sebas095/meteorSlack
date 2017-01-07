import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ProfileModal extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const modal = ReactDOM.findDOMNode(this.refs.userModal);
    $(modal).modal();
  }

  render() {
    return (
      <div ref='userModal' className='ui modal'>
        <h1>{this.props.user}</h1>
        <img src="/images/coco.jpg" alt="coco" />
      </div>
    );
  }
}
