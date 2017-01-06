import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Comment from '../components/Comment';
import AccountsUIWrapper from '../components/AccountsUIWrapper';

import { CommentsCollection } from '../../collections/comments';

class CommentList extends Component {
  constructor() {
    super();
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const comment = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call('comments.insert', comment);
  }

  render() {
    const commentList = this.props.comments.map((comment) => {
      return (<Comment key={comment._id} comment={comment.comment} />);
    });

    let content = '';
    if (this.props.currentUser) {
      content = (
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input ref='textInput' type="text" />
          </form>
          {commentList}
        </div>
      );
    }

    return (
      <div>
        <AccountsUIWrapper />
        {content}
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  currentUser: PropTypes.object
};

export default createContainer(() => {
  Meteor.subscribe('comments');

  return {
    comments: CommentsCollection.find({}).fetch(),
    currentUser: Meteor.user()
  }
}, CommentList);