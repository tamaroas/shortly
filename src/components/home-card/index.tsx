import React from 'react'
import styles from './homeCard.module.css'

export type ThomeCardProps = {
    image : {source:string; alt:string};
    title:string;
    description:string;
};

const HomeCard = ({image, title, description} : ThomeCardProps) => {
  return (
    <div className={`${styles.container} ${image.alt === "1" ? styles.top1 : (image.alt==="2" ? styles.top2:(image.alt==="3"? styles.top3:""))}`}>
        <div className={styles.circle}>
            <img src={image.source} alt={image.alt} />
        </div>       
        <h1 className=" marding-top-15 very-dack-Violet">{title}</h1>
        <p className='font-size-1'>{description}</p>
    </div>
  )
}

export default HomeCard