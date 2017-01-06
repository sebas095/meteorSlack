import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class Comment extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h4>{this.props.comment}</h4>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const comments = [
      { _id: Date.now(), comment: 'Hola Meteor' },
      { _id: Date.now() + 1, comment: 'Hola Meteor' },
      { _id: Date.now() + 2, comment: 'Hola Meteor' }
    ];
    const renderComments = comments.map((comment) => {
      return (<Comment key={comment._id} comment={comment.comment} />);
    });

    return (
      <div>
        {renderComments}
      </div>
    );
  }
}

Meteor.startup(() => {
  const base = document.getElementById('container');
  ReactDOM.render(<App/>, base);
});
