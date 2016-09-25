import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/SongActions';

import Search from '../presentationals/Search/Search';

const mapStateToProps = ({ songs: { searchTerm } }, props) => {
  return {
    searchTerm,
    fields: props.fields,
  };
};

export default connect(mapStateToProps, { fetchSongs })(Search);
