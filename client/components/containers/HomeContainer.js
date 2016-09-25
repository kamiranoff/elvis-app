import { PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../presentationals/Home/Home';


const mapStateToProps = ({ songs: { song }, global: { expanded } }) => {
  return {
    song,
    expanded,
  };
};

Home.propTypes = {
  song: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Home);
