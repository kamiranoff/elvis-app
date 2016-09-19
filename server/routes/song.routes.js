import { Router } from 'express';
import * as SongController from '../controllers/song.controller';
const router = new Router();

// Get all Posts
router.route('/songs').get(SongController.getSongs);

// Get one post by cuid
router.route('/songs/:title').get(SongController.getSong);

export default router;
