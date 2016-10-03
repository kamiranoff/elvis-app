import React, { PropTypes } from 'react';

import { TITLE } from '../../../constants/api';
import SearchContainer from '../../containers/SearchContainer';

import styles from './SongList.css';

const SongsList = ({ songs, handleClick, expandSongList, expanded, documentHeight }) => (
  <section className={expanded ? `${styles.SongList} ${styles.expanded}` : `${styles.SongList}`}>
    <button
      className={
        expanded ? `${styles.SongList__expandBtn} ${styles.expanded}`
          : `${styles.SongList__expandBtn}`} onClick={expandSongList}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <SearchContainer fields={TITLE} />
    <h3 className={styles.SongList__categoryTitle}>
      List of songs
      <span className={styles.SongList__count}>({songs.length})</span>
    </h3>
    <ul style={{ height: `calc(${documentHeight} - 123px` }}>
      {songs.map((song, index) => {
        return (
          <li
            key={song._id + index}
            onClick={() => handleClick(song._id)}
            className={styles.SongList__song}
          >
            {song.title}
          </li>
        );
      })}
    </ul>
  </section>
);

SongsList.propTypes = {
  songs: PropTypes.array.isRequired,
  expandSongList: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  documentHeight: PropTypes.string.isRequired,
};

SongsList.defaultProps = {
  Songs: [],
};

export default SongsList;
