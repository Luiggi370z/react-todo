import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Icon } from '@blueprintjs/core'
const TodoIcon = ({ icon, large, disabled, badge }) => {
  return (
    <div className={styles.root}>
      <Icon
        icon={icon}
        className={`${styles.icon} ${large ? styles.large : ''} ${
          disabled ? styles.disabled : ''
        }`}
      />
      {badge && <div className={styles.badge}>{badge}</div>}
    </div>
  )
}

TodoIcon.defaultProps = {
  large: false,
  disabled: false,
  badge: null
}

TodoIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  badge: PropTypes.node
}

export default TodoIcon
