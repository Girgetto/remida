import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from './style.module.scss'
import lionImage from '../../../../assets/img/omida-real-estate-consulting-italy.png'
import styles from './style.module.scss'
import { Parallax } from 'react-scroll-parallax'

const OurMission = () => {
  const [t] = useTranslation()
  return (
    <div
      className={styled.ourMission}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className={styled.column_2}>
        <Parallax y={[-40, 20]}>
          <img className={styles.image} src={lionImage} alt="view4" />
        </Parallax>
      </div>
      <div className={styled.column_2}>
        <div style={{ position: 'relative' }}>
          <h2 className={styled.ourMissionText}>{t('home.OurMission')}</h2>
        </div>
        <div>
          <p>{t('home.WeOffer')}</p>
          <button className={styled.button}>
            <div className={styled.overLayer}>Go</div>
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurMission
