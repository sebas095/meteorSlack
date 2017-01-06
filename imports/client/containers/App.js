import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountUIWrapper from '../components/AccountsUIWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Listings from '../components/Listings';
import Messages from '../components/Messages';
import ProfileModal from '../components/ProfileModal';

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
  return {
    messages: [],
    channels: [],
    currentUser: Meteor.user()
  }
}, App);
