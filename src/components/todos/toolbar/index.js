import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import {
  Button,
  ButtonGroup,
  AnchorButton,
  Popover,
  Position
} from '@blueprintjs/core'

import StatusSelector from './statusSelector'
import DateSelector from './dateSelector'

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
          <Button icon='tick' />
          <Button icon='trash' />
        </ButtonGroup>
      </div>
    </div>
  )
}

Toolbar.propTypes = {}

export default Toolbar
