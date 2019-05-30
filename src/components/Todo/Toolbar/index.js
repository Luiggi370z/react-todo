import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Button, ButtonGroup, Tooltip, Position } from '@blueprintjs/core'
import StatusFilter from './StatusFilter'

const Toolbar = ({
  statusFilter,
  onCompleteAll,
  onDeleteAll,
  onStatusFilterChange,
  totalByDate,
  totalPending,
  scrolled
}) => {
  return (
    <div className={`${styles.toolbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.filter}>
        <StatusFilter value={statusFilter} onSelect={onStatusFilterChange} />
      </div>

      <div className={styles.actions}>
        <div className={styles.totals}>
          <strong>{totalPending}</strong> of <strong>{totalByDate}</strong> task
          {totalByDate !== 1 ? 's' : ''} left
        </div>
        <ButtonGroup minimal>
          <Tooltip content='Complete All' position={Position.BOTTOM}>
            <Button icon='tick' onClick={onCompleteAll} />
          </Tooltip>
          <Tooltip content='Remove All' position={Position.BOTTOM}>
            <Button icon='trash' onClick={onDeleteAll} />
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
  )
}

Toolbar.defaultProps = {
  scrolled: false
}

Toolbar.propTypes = {
  statusFilter: PropTypes.string.isRequired,
  totalByDate: PropTypes.number.isRequired,
  totalPending: PropTypes.number.isRequired,
  onCompleteAll: PropTypes.func.isRequired,
  onDeleteAll: PropTypes.func.isRequired,
  scrolled: PropTypes.bool
}

export default Toolbar
