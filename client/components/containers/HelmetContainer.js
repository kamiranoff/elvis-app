import { connect } from 'react-redux';
import Helmet from '../presentationals/Helmet/Helmet';

function mapStateToProps() {
  return {
    title: '',
    titleTemplate: '',
  };
}

export default connect(mapStateToProps)(Helmet);
