import SongDao from '../dao/song-dao';
import sanitizer from 'sanitizer';

const FIELDS = {
  SONG_ID: 'songId',
  TITlE: 'title',
  WRITERS: 'writers',
  RELEASE_DATE: 'release_date',
  YOUTUBE_VIDEO_ID: 'youtube_video_id',
  WORDS: 'words',
};

class SongController {

  static validateForm(data) {
    const err = {};
    const sanitizedForm = {};

    Object.keys(data).forEach((key) => {
      let newData = data[key];
      if (key === FIELDS.TITlE && data[key] === '') {
        err.error = 'title field shoud not be empty';
      }

      if (key === FIELDS.WORDS) {
        // replace line break with <br/>
        newData = data[key].replace(/(?:\r\n|\r|\n)/g, '<br />');
      }

      sanitizedForm[key] = sanitizer.sanitize(newData);
    });

    if (err.error) {
      return err;
    }

    return sanitizedForm;
  }

  /**
   * Get all songs
   * @param req
   * @param res
   * @returns void
   */
  static getAll(req, res) {
    if (req.query.fields) {
      let filter = '';
      const fields = req.query.fields;
      if (req.query.filter) {
        filter = req.query.filter;
      }
      SongDao
        .getFields(fields, filter)
        .then(songs => res.status(200).json(songs))
        .catch(error => res.status(400).json(error));
    } else {
      SongDao
        .getAll()
        .then(songs => res.status(200).json(songs))
        .catch(error => res.status(400).json(error));
    }
  }

  /**
   * Get one song
   * @param id
   * @param res
   * @returns void
   */
  static getSong(req, res) {
    SongDao
      .getSong(req.params.id)
      .then(song => res.status(200).json(song))
      .catch(error => res.status(400).json(error));
  }


  /**
   * Get one random song
   * @param id
   * @param res
   * @returns void
   */
  static getRandomSong(req, res) {
    SongDao
      .getRandomSong()
      .then(song => res.status(200).json(song))
      .catch(error => res.status(400).json(error));
  }

  /**
   * Update one song
   * @param id
   * @param res
   * @returns void
   */
  static updateSong(req, res) {
    const _song = SongController.validateForm(req.body);
    if (_song.error) {
      res.status(400).json(_song);
    } else {
      SongDao
        .updateSong(_song)
        .then(song => res.status(200).json(song))
        .catch(error => res.status(400).json(error));
    }
  }
}

export default SongController;
