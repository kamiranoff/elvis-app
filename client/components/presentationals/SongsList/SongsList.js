import React, { PropTypes } from 'react';

import styles from './SongList.css';

const SongsList = ({ songsTitle, fetchSong, expandSongList, expanded }) => {
  const handleClick = (titleId) => {
    fetchSong(titleId);
  };

  return (
    <section className={expanded ? `${styles.SongList} ${styles.expanded}` : `${styles.SongList}`}>
      <button className={styles.SongList__expandBtn} onClick={expandSongList}>Close</button>
      <h1>List of songs</h1>
      <ul>
        {songsTitle.map((title, index) => {
          return (
            <li
              key={title._id + index}
              onClick={() => handleClick(title._id)}
              className={styles.SongList__song}

            >
              {title.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

SongsList.propTypes = {
  songsTitle: PropTypes.array.isRequired,
  fetchSong: PropTypes.func.isRequired,
  expandSongList: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default SongsList;
