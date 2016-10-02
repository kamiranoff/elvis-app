import React, { PropTypes } from 'react';

import VideoPlayerContainer from './../../containers/VideoPlayerContainer';
import SongFormContainer from '../../containers/SongFormContainer';
import styles from './Song.css';

import pencil from '../../../assets/images/icons/pencil.svg';
import disc from '../../../assets/images/icons/compact-disc.svg';
import quill from '../../../assets/images/icons/quill.svg';

const Song = ({ song, editMode, handleUpdateClick }) => {
  function createMarkup() {
    return { __html: song.words };
  }

  return (
    <article className={styles.Song}>
      <h1>
        {song.title} <span className={styles.songDate}>{song.release_date}</span>
        <button
          className={styles.Song__updateBtn}
          onClick={() => handleUpdateClick(!editMode)}
        >
          <img src={pencil} alt="Edit Song" />
        </button>
      </h1>

      <div className={styles.songInfo}>
        <p className={styles.album}>
          <img className={styles.icons} src={disc} alt="album" />
          {song.album_debut ? song.album_debut : null}
        </p>
        <p className={styles.writers}>
          <img className={styles.icons} src={quill} alt="writers" />
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
      {!editMode ? null :
        <SongFormContainer />}
    </article>
  );
};

Song.propTypes = {
  song: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired,
  handleUpdateClick: PropTypes.func.isRequired,
};

Song.defaultProps = {
  song: {},
};

export default Song;
