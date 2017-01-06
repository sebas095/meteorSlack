import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const CommentsCollection = new Mongo.Collection('comments');

if (Meteor.isServer) {
  Meteor.publish('comments', function publishComments() {
    return CommentsCollection.find({});
  });
}

Meteor.methods({
  'comments.insert'(comment) {
    check(comment, String);
    CommentsCollection.insert({comment});
  }
});
