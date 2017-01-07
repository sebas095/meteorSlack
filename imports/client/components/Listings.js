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

    const padding = {
      padding: '2%'
    }

    return (
      <div>
        <div className='channels__channel-list ui bottom attached tabular menu'>
          {channels}
        </div>
        <div style={padding} className='right menu'>
          <form className='ui form' onSubmit={this.handleSubmit.bind(this)}>
            <input ref="inputChannel" type="text" placeholder="nuevo canal" />
          </form>
        </div>
      </div>
    );
  }
}
