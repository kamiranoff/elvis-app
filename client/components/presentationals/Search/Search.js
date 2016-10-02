import React, { PropTypes } from 'react';

import { Debounce } from 'react-throttle';

import styles from './Search.css';

const Search = ({ fields, fetchSongs }) => {
  const handleChange = (value) => {
    let filter;
    if (value) {
      filter = value;
    }
    fetchSongs(fields, filter);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Debounce time="300" handler="onChange">
        <input
          className={styles.Search}
          placeholder="Search..."
          type="text"
          onChange={(event) => handleChange(event.target.value)}
        />
      </Debounce>
    </form>
  );
};

Search.propTypes = {
  fields: PropTypes.string.isRequired,
  fetchSongs: PropTypes.func.isRequired,
};

export default Search;
