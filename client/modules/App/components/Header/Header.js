import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import Menu from '../Menu/Menu';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <Menu />
      <div className={styles.content}>
        {
          context.router.isActive('/posts', true)
            ?
            <a
              className={styles['add-post-button']}
              href="#"
              onClick={props.toggleAddPost}
            >
              <FormattedMessage id="addPost" />
            </a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
};

export default Header;
