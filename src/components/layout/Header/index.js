import React from 'react'
import styles from './index.module.scss'

const Header = props => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={`${styles.left} ${props.invert ? styles.invert : ''}`}>
          <h1>{props.title}</h1>
          {!props.children && <span>{props.subtitle}</span>}
          {props.children}
        </div>
        <div className={styles.right}>{props.rightContent}</div>
      </div>
    </div>
  )
}

export default Header
