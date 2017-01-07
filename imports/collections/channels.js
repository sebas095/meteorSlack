import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const ChannelsCollection = new Mongo.Collection('channels');

if (Meteor.isServer) {
  Meteor.publish('channels', () => {
    return ChannelsCollection.find({});
  });
}

Meteor.methods({
  'channel.insert'(channel) {
    check(channel, String);

    if (!this.userId) {
      throw new Meteor.Error('No autorizado');
    }

    ChannelsCollection.insert({channel},);
  }
});
