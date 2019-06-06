import React from 'react'
import PropTypes from 'prop-types'
import { Spinner } from '@blueprintjs/core'
import styles from './index.module.scss'

const Progress = ({ completed, total }) => {
  const percentage = completed ? parseFloat(completed / total).toFixed(2) : 0

  return (
    <div className={styles.progress}>
      <Spinner size={25} value={percentage} />
      <span>{`${percentage * 100} % done`}</span>
    </div>
  )
}

Progress.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Progress
