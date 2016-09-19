import { connect } from 'react-redux';

import Layout from '../presentationals/Layout/Layout';

import { switchLanguage } from '../../old.modules/Intl/IntlActions';

const mapStateToProps = (store) => {
  return {
    currentPageName: '',
    intl: store.intl,
  };
};

export default connect(mapStateToProps, {
  switchLanguage,
})(Layout);
