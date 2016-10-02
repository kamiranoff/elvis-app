import React, { PropTypes } from 'react';
import styles from './SongForm.css';

import loader from '../../../assets/images/icons/rotate.svg';

const SongForm = ({ handleSubmit, handleChange, song, error }) => (
  <form
    className={styles.SongForm}
    onSubmit={(event) => handleSubmit(event)}
  >
    <h3>Edit Mode</h3>
    <label>
      title
      <input
        onChange={(event) => handleChange(event)}
        name="title"
        placeholder="Title"
        value={song.title}
      />
    </label>
    <label>
      Writers
      <input
        onChange={(event) => handleChange(event)}
        name="writers"
        placeholder="Writers"
        value={song.writers}
      />
    </label>
    <label>
      Release Date (year)
      <input
        onChange={(event) => handleChange(event)}
        name="release_date"
        placeholder="Release Date"
        value={song.release_date}
      />
    </label>
    <label>
      Album Debut name
      <input
        onChange={(event) => handleChange(event)}
        name="album_debut"
        placeholder="Album Debut"
        value={song.album_debut}
      />
    </label>
    <label>
      Youtube Video id
      <input
        onChange={(event) => handleChange(event)}
        name="youtube_video_id"
        placeholder="Youtube video id"
        value={song.youtube_video_id}
      />
    </label>
    <label>
      words (html allowed)
      <textarea
        onChange={(event) => handleChange(event)}
        name="words"
        placeholder="Love me tender, love me dear..."
        value={song.words}
      />
    </label>
    <p>{error}</p>
    <button type="submit">
      Edit Song
      <img src={loader} role="presentation" />
    </button>
  </form>
);

SongForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  song: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default SongForm;
