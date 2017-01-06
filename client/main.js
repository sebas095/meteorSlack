import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>Hola mundo, desde react</h1>
    );
  }
}

Meteor.startup(() => {
  const base = document.getElementById('container');
  ReactDOM.render(<App/>, base);
});
