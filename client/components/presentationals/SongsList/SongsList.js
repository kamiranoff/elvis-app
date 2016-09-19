import React, { PropTypes } from 'react';

const SongsList = ({ songsTitle, fetchSong }) => {
  const handleClick = (title) => {
    fetchSong(title);
  };

  return (
    <ul className="SongsList">
      {songsTitle.map((title, index) => {
        return (
          <li
            key={title._id + index}
            onClick={() => handleClick(title.title)}
          >
            {title.title}
          </li>
        );
      })}
    </ul>
  );
};

SongsList.propTypes = {
  songsTitle: PropTypes.array.isRequired,
  fetchSong: PropTypes.func.isRequired,
};

export default SongsList;
