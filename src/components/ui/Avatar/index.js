import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Icon } from '@blueprintjs/core'

const Avatar = ({ icon, large, disabled, badge }) => {
  return (
    <div
      className={`${styles.root} ${large ? styles.large : ''} ${
        disabled ? styles.disabled : ''
      }`}>
      <svg
        className={styles.circle}
        viewBox='0 0 60 60'
        xmlns='http://www.w3.org/2000/svg'>
        <g>
          <circle
            className={styles.background}
            r='48%'
            cy='50%'
            cx='50%'
            strokeLinecap='round'
          />
          <circle
            className={styles.foreground}
            r='48%'
            cy='50%'
            cx='50%'
            strokeLinecap='round'
          />
        </g>
      </svg>
      <Icon icon={icon} className={styles.icon} />
      {badge && <div className={styles.badge}>{badge}</div>}
    </div>
  )
}

Avatar.defaultProps = {
  large: false,
  disabled: false,
  badge: null
}

Avatar.propTypes = {
  icon: PropTypes.string.isRequired,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  badge: PropTypes.node
}

export default Avatar
