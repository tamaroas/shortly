import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.card}>
                <ul>
                    <h1>Shortly</h1>
                    <li></li>
                </ul>
                
            </div>
            <div className={styles.card}>
                <ul>
                    <h3>Features</h3>
                    <li><a href="#">Link Shorting</a></li>
                    <li><a href="#">Branded Links</a></li>
                    <li><a href="#">Analytics</a></li>
                </ul>
            </div>
            <div className={styles.card}>
                <ul>
                    <h3>Resources</h3>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div className={styles.card}>
                <ul>
                    <h3>Company</h3>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className={styles.cardSocialMedia}>
                <a href="#"><img src="images/icon-facebook.svg" alt="facebook" /></a>
                <a href="#"><img src="images/icon-twitter.svg" alt="twitter" /></a>
                <a href="#"><img src="images/icon-pinterest.svg" alt="priterest" /></a>
                <a href="#"><img src="images/icon-instagram.svg" alt="instagram" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer