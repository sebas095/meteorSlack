import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const MessagesCollection = new Mongo.Collection('messages');

if (Meteor.isServe) {
  Meteor.publish('messages', () => {
    return MessagesCollection.find({});
  });
}
