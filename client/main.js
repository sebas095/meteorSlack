import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-ui';
import App from '../imports/client/containers/App';

Meteor.startup(() => {
  const base = document.getElementById('container');
  ReactDOM.render(<App />, base);
});
