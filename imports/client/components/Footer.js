import React, { Component } from 'react';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <input ref="inputMessage" type="text" />
        </form>
      </div>
    );
  }
}
