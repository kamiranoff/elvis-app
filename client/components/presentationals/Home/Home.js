import React, { PropTypes } from 'react';

import SongsListContainer from '../../containers/SongsListContainer';
import Song from '../Song/Song';

import styles from './Home.css';

const Home = ({ song }) => {
  return (
    <section className={styles.home}>
      <SongsListContainer />
      <Song song={song} />
    </section>
  );
};

Home.propTypes = {
  song: PropTypes.object.isRequred,
};

export default Home;
