import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Channel from './Channel';

export default class Listings extends Component {
  constructor() {
    super();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const channel = ReactDOM.findDOMNode(this.refs.inputChannel).value.trim();
    this.props.onCreateChannel(channel);
    ReactDOM.findDOMNode(this.refs.inputChannel).value = '';
  }

  render() {
    const channels = this.props.channels.map((channel) => {
      return (
        <Channel
          key={channel._id}
          onChangeChannel={this.props.onChangeChannel}
          name={channel.channel} />
      );
    });

    return (
      <div>
        {channels}
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="inputChannel" type="text" placeholder="nuevo canal" />
        </form>
      </div>
    );
  }
}
