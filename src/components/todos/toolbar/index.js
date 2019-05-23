import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import {
  Button,
  ButtonGroup,
  AnchorButton,
  Popover,
  Tooltip,
  Position
} from '@blueprintjs/core'

import StatusSelector from './StatusSelector'
import DateSelector from './DateSelector'

const Toolbar = props => {
  return (
    <div
      className={`${styles.toolbar} ${props.scrolled ? styles.scrolled : ''}`}>
      <div className={styles.filter}>
        <ButtonGroup minimal>
          <Popover
            content={<DateSelector todos={props.todos} />}
            position={Position.BOTTOM_LEFT}
            minimal>
            <AnchorButton rightIcon='caret-down' icon='calendar'>
              Today
            </AnchorButton>
          </Popover>
          <Popover
            content={<StatusSelector onSelect={props.onStatusFilterChange} />}
            position={Position.BOTTOM_LEFT}
            minimal>
            <AnchorButton rightIcon='caret-down' icon='eye-open'>
              {props.show}
            </AnchorButton>
          </Popover>
        </ButtonGroup>
      </div>
      <div className={styles.actions}>
        <ButtonGroup minimal>
          <Tooltip content='Complete All' position={Position.BOTTOM}>
            <Button icon='tick' />
          </Tooltip>
          <Tooltip content='Remove All' position={Position.BOTTOM}>
            <Button icon='trash' />
          </Tooltip>
        </ButtonGroup>
      </div>
    </div>
  )
}

Toolbar.propTypes = {}

export default Toolbar
