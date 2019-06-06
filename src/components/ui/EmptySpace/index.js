import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@blueprintjs/core'
import styles from './index.module.scss'

const EmptySpace = ({ icon, message }) => {
  return (
    <div className={styles.root}>
      <Icon icon={icon} iconSize={62} />
      <p>{message}</p>
    </div>
  )
}

EmptySpace.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default EmptySpace
