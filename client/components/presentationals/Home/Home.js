import React, { PropTypes } from 'react';

import Song from '../Song/Song';
import Header from './../Header/Header';

import styles from './Home.css';

const Home = ({ song }) => {
  return (
    <section className={styles.home}>
      <Header />
      <Song song={song} />
    </section>
  );
};

Home.propTypes = {
  song: PropTypes.object.isRequired,
};

Home.defaultProps = {
  song: {},
};

export default Home;
