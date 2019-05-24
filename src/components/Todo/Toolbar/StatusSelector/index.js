import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem } from '@blueprintjs/core'
import styles from './index.module.scss'
const statuses = ['All', 'Done', 'Pending']

const StatusSelector = ({ onSelect }) => {
  const handleChange = e => onSelect(e.target.name)

  return (
    <Menu>
      {statuses.map(status => (
        <MenuItem
          key={status}
          text={status}
          name={status}
          className={styles.status}
          onClick={handleChange}
        />
      ))}
    </Menu>
  )
}

StatusSelector.propTypes = {
  onSelect: PropTypes.func.isRequired
}

export default StatusSelector
