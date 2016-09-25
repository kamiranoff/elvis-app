import SongDao from '../dao/song-dao';

class SongController {
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

  static getRandomSong(req, res) {
    SongDao
      .getRandomSong()
      .then(song => res.status(200).json(song))
      .catch(error => res.status(400).json(error));
  }
}

export default SongController;

