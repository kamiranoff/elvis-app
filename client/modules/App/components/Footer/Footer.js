import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

export function Footer(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );
  return (
    <div className={styles.footer}>
      <ul>
        <li><a href="http://www.kevinamiranoff.com" target="_blank"> portfolio </a></li>
        <li><a href="http://dev.kevinamiranoff.com" target="_blank"> Marvel encyclopedia </a></li>
      </ul>
      <div className={styles['language-switcher']}>

        <ul>
          <span><FormattedMessage id="switchLanguage" /></span>
          {languageNodes}
        </ul>
      </div>
    </div>
  );
}

Footer.propTypes = {
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Footer;
