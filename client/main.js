import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import '../imports/startup/accounts-ui';
import CommentList from '../imports/client/containers/CommentList';

Meteor.startup(() => {
  const base = document.getElementById('container');
  ReactDOM.render(<CommentList />, base);
});
