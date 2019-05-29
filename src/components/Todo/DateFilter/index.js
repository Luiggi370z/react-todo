import React from 'react'
import PropTypes from 'prop-types'
import DateSelector from './DateSelector'
import styles from './index.module.scss'
import { AnchorButton, Popover, Position } from '@blueprintjs/core'

const DateFilter = props => {
  return (
    <div>
      <Popover
        content={
          <DateSelector
            todos={props.todos}
            onSelect={props.onDateFilterChange}
          />
        }
        position={Position.BOTTOM_LEFT}
        minimal>
        <AnchorButton
          minimal
          rightIcon='caret-down'
          icon='calendar'
          className={styles.button}>
          {props.value.key}
        </AnchorButton>
      </Popover>
    </div>
  )
}

DateFilter.propTypes = {
  value: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.object
  }).isRequired
}

export default DateFilter
