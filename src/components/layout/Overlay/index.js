import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const Overlay = ({ left, right }) => {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.panel} ${styles.left}`}>{left}</div>
      <div className={`${styles.panel} ${styles.right}`}>{right}</div>
    </div>
  )
}

Overlay.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
}

export default Overlay
