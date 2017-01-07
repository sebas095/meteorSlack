const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary');
const async = require('async');

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

cloudinary.config({
  cloud_name: 'dbxcmsgxt',
  api_key: '796171864249732',
  api_secret: 'bfBLWXhd79MjC1jAjvYu9OwCWFU'
});

Meteor.methods({
  'cloudinary.insert'(fileInfo, fileData) {
    const base64 = fileData.replace(/^data:image\/png;base64,/, '');
    const fileName = this.userId + '.png';
    const userToUpdate = Meteor.users.findOne({_id: this.userId});

    const asyncFunc = Meteor.wrapAsync(async.waterfall);
    const resAsyncFunc = asyncFunc([
      function(cb) {
        fs.writeFile(fileName, base64, 'base64', (err) => {
          if (err) {
            return cb(err);
          }
          const filepath = path.join(process.cwd(), fileName);
          cb(null, filepath);
        });
      },
      function(arg1, cb) {
        cloudinary.uploader.upload(arg1, function(result) {
          if (!result) {
            return cb(new Meteor.Error());
          }
          cb(null, result);
        }, {public_id: this.userId, format: 'jpg'});
      }
    ]);

    Meteor.users.update(userToUpdate, {$set: {'profile.url_photo': resAsyncFunc.url}});
    return resAsyncFunc;
  }
});
