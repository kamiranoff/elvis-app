import React from 'react';

// Import Style
import styles from './FullScreenImage.css';

const FullScreenImage = () => {
  const getWindowHeight = () => {
    if (typeof window !== 'undefined') {
      const w = window;
      const d = document;
      const e = d.documentElement;
      const g = d.getElementsByTagName('body')[0];
      const y = w.innerHeight || e.clientHeight || g.clientHeight;
      return y;
    }
    return 0;
  };
  return (
    <div
      className={styles.FullScreenImage}
      style={{ height: getWindowHeight() }}
    >
    </div>
  );
};

export default FullScreenImage;
