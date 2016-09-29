import { connect } from 'react-redux';

import Layout from '../presentationals/Layout/Layout';

import { switchLanguage } from '../../old.modules/Intl/IntlActions';

const mapStateToProps = ({ intl, global: { splashScreenVisibility } }) => ({
  intl,
  splashScreenVisibility,
});

export default connect(mapStateToProps, {
  switchLanguage,
})(Layout);
