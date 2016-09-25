import React, { PropTypes } from 'react';
import styles from './Song.css';

import VideoPlayerContainer from './../../containers/VideoPlayerContainer';

import disc from '../../../assets/images/icons/compact-disc.svg';
import quill from '../../../assets/images/icons/quill.svg';

const Song = ({ song }) => {
  function createMarkup() {
    return { __html: song.words };
  }

  /*  const displayWriters = (writers) => {
   return writers.map((writer) => {
   return (
   `${writer}, `
   );
   });
   };*/

  return (
    <article className={styles.Song}>
      <h1>{song.title} <span className={styles.songDate}>{song.release_date}</span></h1>
      <div className={styles.songInfo}>
        <p className={styles.album}>
          <img className={styles.icons} src={disc} role="presentation" />
          {song.album_debut ? song.album_debut : null}
        </p>
        <p className={styles.writers}>
          <img className={styles.icons} src={quill} role="presentation" />
          {song.writers ? song.writers : null}
        </p>

      </div>
      <div className={styles.Song__VideoLyricsContainer}>
        <div
          className={styles.songLyrics}
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        <VideoPlayerContainer videoId={song.youtube_video_id} />
      </div>
    </article>
  );
};


Song.propTypes = {
  song: PropTypes.object.isRequired,
};

Song.defaultProps = {
  song: {},
};

export default Song;
