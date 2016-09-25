import React, { PropTypes } from 'react';

import SongContainer from '../../containers/SongContainer';
import Header from './../Header/Header';

import styles from './Home.css';

const Home = ({ expanded }) => {
  return (
    <section className={`${styles.home} ${expanded ? styles.expanded : null}`}>
      <Header />
      <SongContainer />
    </section>
  );
};

Home.propTypes = {
  expanded: PropTypes.bool.isRequired,
};


export default Home;
