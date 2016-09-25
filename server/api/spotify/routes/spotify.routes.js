import { Router } from 'express';
import SpotifyController from '../controller/spotify-controller';
const router = new Router();

// Get all Songs
router.route('/spotify/elvis/').get(SpotifyController.getElvis);


export default router;
