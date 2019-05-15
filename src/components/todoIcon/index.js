import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Icon } from '@blueprintjs/core'
const TodoIcon = props => {
  return (
    <div className={styles.root}>
      <Icon icon={props.icon} className={styles.icon} />
    </div>
  )
}

TodoIcon.propTypes = {}

export default TodoIcon
