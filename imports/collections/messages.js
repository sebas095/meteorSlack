import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const MessagesCollection = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.publish('messages', () => {
    return MessagesCollection.find({});
  });
}

Meteor.methods({
  'message.insert'(message, channel) {
    check(message, String);

    if (!this.userId) {
      throw new Meteor.Error('No autorizado');
    }

    MessagesCollection.insert({
      user: Meteor.users.findOne(this.userId).username,
      message,
      channel
    });
  }
});
