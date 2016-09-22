import Songs from '../models/songs';
import Song from '../models/song';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getSongs(req, res) {
  const query = Songs.find({}).sort('title').select('title');
  query.exec((err, songsTitle) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ songsTitle });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getSong(req, res) {
  Song.findOne({ _id: req.params.id }).exec((err, song) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ song });
  });
}
