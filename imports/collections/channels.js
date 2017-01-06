import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const ChannelsCollection = new Mongo.Collection('channels');

if (Meteor.isServe) {
  Meteor.publish('channels', () => {
    return ChannelsCollection.find({});
  });
}
