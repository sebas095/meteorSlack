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

    let url_photo;
    if (Meteor.users.findOne(this.userId).profile) {
      url_photo = Meteor.users.findOne(this.userId).profile.url_photo;
      if (!url_photo) {
        url_photo = '/images/coco.jpg';
      }
    } else {
      url_photo = '/images/coco.jpg';
    }

    MessagesCollection.insert({
      user: Meteor.users.findOne(this.userId).username,
      userId: this.userId,
      userImg: url_photo,
      message,
      channel
    });
  },
  'message.update'(url) {
    check(url, String);

    if (!this.userId) {
      throw new Meteor.Error('No autorizado');
    }

    MessagesCollection.update({userId: this.userId}, {$set: {userImg: url}}, {multi: true});
  }
});
