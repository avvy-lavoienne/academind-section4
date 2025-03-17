// Loading.jsx
import React from 'react';
import styles from './Loading.module.css';

const LoadingLatest = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <div className={styles.circle}></div>
      </div>
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default LoadingLatest;