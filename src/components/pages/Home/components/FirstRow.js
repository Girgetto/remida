import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss';
import castle from '../../../../assets/img/castle.jpg';

const FirstSquares = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.squares}>
      <div className={styles.square}>
        {t('home.TheExperience')}
        {t('home.TheKnowledge')}
      </div>
      <div className={styles.square}>
        <img className={styles.image} src={castle} alt="castle"/>
      </div>
      <div className={styles.square}>
        {t('home.WhenBeing')}
        {t('home.InThree')}
      </div>
    </div>
  );
};

export default FirstSquares;
