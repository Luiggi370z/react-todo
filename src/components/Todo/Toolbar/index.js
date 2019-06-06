import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, Tooltip, Position } from '@blueprintjs/core'
import styles from './index.module.scss'
import StatusFilter from './StatusFilter'

const Toolbar = ({
  statusFilter,
  onCompleteAll,
  onDeleteAll,
  onStatusFilterChange,
  scrolled,
}) => {
  return (
    <div className={`${styles.toolbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.filter}>
        <StatusFilter value={statusFilter} onSelect={onStatusFilterChange} />
      </div>

      <div className={styles.actions}>
        <ButtonGroup minimal>
          <Tooltip content="Complete All" position={Position.BOTTOM}>
            <Button icon="tick" onClick={onCompleteAll} />
          </Tooltip>
          <Tooltip content="Remove All" position={Position.BOTTOM}>
            <Button icon="trash" onClick={onDeleteAll} />
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
  )
}

Toolbar.defaultProps = {
  scrolled: false,
}

Toolbar.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  onCompleteAll: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
  scrolled: PropTypes.bool,
  onStatusFilterChange: PropTypes.func.isRequired,
}

export default Toolbar
