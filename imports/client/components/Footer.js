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
    const padding = {
      padding: '2%',
      margin: '1%'
    };

    return (
      <div className='ui two column grid'>
        <div style={padding} className='teal row'>
          <form className='ui form' onSubmit={this.handleSubmit.bind(this)}>
            <div className='ui huge icon input'>
              <input ref="inputMessage" placeholder='Enviar mensaje...' type="text" />
              <i className='send outline icon'></i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
