import React, { PropTypes } from 'react';
import styles from './Song.css';

const Song = ({ song }) => {
  function createMarkup() { return { __html: song.words }; }
  const displayWriters = (writers) => {
    return writers.map((writer) => {
      return (
        `${writer}, `
      );
    });
  };

  return (
    <article className={styles.song}>
      <h1>{song.title} <span className={styles.songDate}>{song.release_date}</span></h1>
      <h2 className={styles.album}>{song.album ? `Album: ${song.album}` : null}</h2>
      <h3 className={styles.writers}>{song.writers ? `Writers: ${displayWriters(song.writers)}` : null}</h3>
      <div
        className={styles.songLyrics}
        dangerouslySetInnerHTML={createMarkup()}
      ></div>
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
