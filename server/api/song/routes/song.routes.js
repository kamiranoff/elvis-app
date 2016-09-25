import { Router } from 'express';
import SongController from '../controller/song-controller';
const router = new Router();

// Get all Songs
router.route('/songs').get(SongController.getAll);

// Get a random Song
router.route('/songs/random/').get(SongController.getRandomSong);

// Get one song by id
router.route('/songs/:id').get(SongController.getSong);

export default router;
