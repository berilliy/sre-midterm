import React from 'react'
import styles from '../../mobileStyles.module.css'; 

export default function MobileHeader() {
  return (
    <header className={styles.mobile}>
        <i className="fa-solid fa-bars"></i>
        <input type="text" placeholder='search for albums...' />
    </header>
  )
}
