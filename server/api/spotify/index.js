import SpotifyWebApi from 'spotify-web-api-node';

import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_SECRET,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_ACCESS_TOKEN,
} from '../../secret/credentials';

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId : SPOTIFY_CLIENT_ID,
  clientSecret : SPOTIFY_SECRET,
  redirectUri : SPOTIFY_REDIRECT_URI,
});
spotifyApi.setAccessToken(SPOTIFY_ACCESS_TOKEN);




export default spotifyApi;