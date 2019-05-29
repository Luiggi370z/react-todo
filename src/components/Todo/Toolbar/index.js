import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Button, ButtonGroup, Tooltip, Position } from '@blueprintjs/core'
import StatusFilter from './StatusFilter'

const Toolbar = props => {
  const { statusFilter, completeAll, deleteAll, onStatusFilterChange } = props

  const handleStatusFilterChange = e => onStatusFilterChange(e.target.name)

  return (
    <div
      className={`${styles.toolbar} ${props.scrolled ? styles.scrolled : ''}`}>
      <div className={styles.filter}>
        <StatusFilter value={statusFilter} onSelect={onStatusFilterChange} />
      </div>
      <div className={styles.actions}>
        <ButtonGroup minimal>
          <Tooltip
            content='Complete All'
            position={Position.BOTTOM}
            onClick={completeAll}>
            <Button icon='tick' />
          </Tooltip>
          <Tooltip
            content='Remove All'
            position={Position.BOTTOM}
            onClick={deleteAll}>
            <Button icon='trash' />
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  statusFilter: PropTypes.string.isRequired
}

export default Toolbar
