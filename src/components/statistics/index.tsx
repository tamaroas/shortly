import React from 'react'
import styles from './statistics.module.css'
import { cards } from "./../../utils/card";
import HomeCard from '../home-card';

const Statistics = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h1 className='very-dack-Violet'><b>Advanced Statistics</b></h1>
          <p className="font-size-1">
            Track how your links are performing across the web widht <br />
            aour advanced statistics dashboard.
          </p>
        </div>
        <div className={styles.cardLine}></div>
        <div className={styles.subContainer}>
            {cards.map((card, index)=>(
              <HomeCard 
                key={index}
                {...card}
              />
            ))}
        </div>
    </div>
  )
}

export default Statistics