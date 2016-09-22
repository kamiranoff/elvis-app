import { connect } from 'react-redux';
import Home from '../presentationals/Home/Home';


const mapStateToProps = ({ songs }) => {
  return {
    song: songs.song,
  };
};

export default connect(mapStateToProps, null)(Home);
