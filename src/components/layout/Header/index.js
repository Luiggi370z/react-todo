import React from 'react'
import styles from './index.module.scss'

const Header = props => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>{props.title}</h1>
        <span>{props.subtitle}</span>
      </div>
      {props.action}
    </div>
  )
}

export default Header
