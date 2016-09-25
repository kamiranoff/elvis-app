import spotifyApi from '../index';

const ELVIS = '43ZHCT0cAZBISjO8DG9PnE';

class SpotifyController {

  /**
   * Get one song
   * @param id
   * @param res
   * @returns void
   */
  static getElvis(req, res) {
    spotifyApi.getArtist(ELVIS)
      .then((data) => {
        res.status(200).json(data);
        console.log('Artist information', data.body);
      }, (err) => {
        console.error(err);
      });
  }
}


export default SpotifyController;

