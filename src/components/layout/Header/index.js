import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const Header = ({ invert, title, subtitle, rightContent, children }) => {
  return (
    <div className={styles.background} data-test="headerWrapper">
      <div className={styles.container}>
        <div
          className={`${styles.left} ${invert ? styles.invert : ''}`}
          data-test="headerContainer"
        >
          <h1>{title}</h1>
          {!children && <span>{subtitle}</span>}
          {children}
        </div>
        <div className={styles.right} data-test="headerRightContent">
          {rightContent}
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  invert: PropTypes.bool,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  rightContent: PropTypes.node,
  children: PropTypes.node,
}

Header.defaultProps = {
  invert: false,
  subtitle: '',
  rightContent: null,
  children: null,
}

export default Header
