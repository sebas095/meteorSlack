import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import AccountUIWrapper from '../components/AccountsUIWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Listings from '../components/Listings';
import Messages from '../components/Messages';
import ProfileModal from '../components/ProfileModal';

import { MessagesCollection } from '../../collections/messages';
import { ChannelsCollection } from '../../collections/channels';

class App extends Component {
  constructor() {
    super();
    Session.set('channel', 'general');
  }

  sendMessage(message) {
    Meteor.call('message.insert', message, Session.get('channel'));
  }

  createChannel(channel) {
    Meteor.call('channel.insert', channel);
  }

  changeChannel(channel) {
    Session.set('channel', channel);
  }

  render() {
    let content = '';
    if (this.props.currentUser) {
      content = (
        <div>
          <Header />
          <div className='ui container'>
            <Messages messages={this.props.messages} />
            <Listings
              onCreateChannel={this.createChannel.bind(this)}
              onChangeChannel={this.changeChannel.bind(this)}
              channels={this.props.channels} />
          </div>
          <Footer onSendMessage={this.sendMessage.bind(this)} />
          <ProfileModal />
        </div>
      );
    }

    return (
      <div className='ui container'>
        <AccountUIWrapper />
        {content}
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired,
  channels: PropTypes.array.isRequired,
  currentUser: PropTypes.object
};

export default createContainer(() => {
  Meteor.subscribe('messages');
  Meteor.subscribe('channels');

  return {
    messages: MessagesCollection.find({channel: Session.get('channel')}).fetch(),
    channels: ChannelsCollection.find({}).fetch(),
    currentUser: Meteor.user()
  }
}, App);
