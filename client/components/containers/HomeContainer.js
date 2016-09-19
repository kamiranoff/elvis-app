import { connect } from 'react-redux';
import Home from '../presentationals/Home/Home';


function mapStateToProps({ songs }) {
  return {
    song: songs.song,
  };
}

export default connect(mapStateToProps)(Home);
