import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
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
  }

  render() {
    return (
      <div>Hola</div>
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
    messages: MessagesCollection.find({}).fetch(),
    channels: ChannelsCollection.find({}).fetch(),
    currentUser: Meteor.user()
  }
}, App);
