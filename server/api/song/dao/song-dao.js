/* eslint-disable */
// Problem with song defined before declaration

import mongoose from 'mongoose';
import Promise from 'bluebird';
import songSchema from '../model/song-model';

const log = require('log4js').getLogger('song-dao');

songSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    const _query = {};
    Song
      .find(_query)
      .exec((err, songs) => {
        if (err) {
          reject(err);
        } else {
          resolve(songs);
        }
      });
  });
};

songSchema.statics.getFields = (fields, filter) => {
  return new Promise((resolve, reject) => {
    let _query = {};

    if (filter) {
      _query = { [fields]: { $regex: filter, $options: 'i' } };
    }
    Song
      .find(_query).sort(fields).select(fields)
      .exec((err, songs) => {
        if (err) {
          reject(err);
        } else {
          resolve(songs);
        }
      });
  });
};


songSchema.statics.getSong = (id) => {
  return new Promise((resolve, reject) => {
    const _query = { _id: id };
    Song
      .findOne(_query)
      .exec((err, song) => {
        if (err) {
          reject(err);
        } else {
          resolve(song);
        }
      });
  });
};

songSchema.statics.getRandomSong = () => {
  log.debug('getRandomSong');
  return new Promise((resolve, reject) => {
    Song.count().exec((err, count) => {
      const random = Math.floor(Math.random() * count);
      Song
        .findOne().skip(random)
        .exec((error, song) => {
          if (error) {
            reject(error);
          } else {
            resolve(song);
          }
        });
    });
  });
};

songSchema.statics.updateSong = (song) => {
  log.debug('update Song', song);
  return new Promise((resolve, reject) => {
    const _query = { _id: song.songId };
    Song.findOneAndUpdate(_query, song, { new: true }).exec(
      (err, song) => {
        if (err) {
          reject(err);
          console.log(err);
        } else {
          console.log(song);
          resolve(song);
        }
      });
  });
};

const Song = mongoose.model('Song', songSchema);

export default Song;
