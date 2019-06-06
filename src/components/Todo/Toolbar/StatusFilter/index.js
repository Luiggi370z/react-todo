import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const statuses = ['All', 'Done', 'Active']

const StatusFilter = ({ value, onSelect }) => {
  const handleChange = e => onSelect(e.target.name)

  return (
    <ButtonGroup minimal>
      {statuses.map(status => (
        <Button
          key={status}
          text={status}
          name={status}
          className={`${styles.button} ${
            value === status ? styles.active : ''
          }`}
          onClick={handleChange}
        />
      ))}
    </ButtonGroup>
  )
}

StatusFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default StatusFilter
