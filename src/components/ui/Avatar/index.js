import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@blueprintjs/core'
import styles from './index.module.scss'

const circle = style => (
  <circle className={style} r="48%" cy="50%" cx="50%" strokeLinecap="round" />
)

const Avatar = ({ icon, large, disabled, badge }) => {
  const rootClasses = [
    styles.root,
    large ? styles.large : '',
    disabled ? styles.disabled : '',
  ].join(' ')

  return (
    <div className={rootClasses}>
      <svg
        className={styles.circle}
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {circle(styles.background)}
          {circle(styles.foreground)}
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
  badge: null,
}

Avatar.propTypes = {
  icon: PropTypes.string.isRequired,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  badge: PropTypes.node,
}

export default Avatar
