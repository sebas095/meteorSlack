import React, { Component } from 'react';

import Channel from './Channel';

export default class Listings extends Component {
  constructor() {
    super();
  }

  render() {
    const channelName = 'channel';

    return (
      <div>
        <Channel name={channelName} />
        <Channel name={channelName} />
        <Channel name={channelName} />
      </div>
    );
  }
}
