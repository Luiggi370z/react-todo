import React from 'react'
import PropTypes from 'prop-types'
import { AnchorButton, Popover, Position } from '@blueprintjs/core'
import DateSelector from './DateSelector'
import styles from './index.module.scss'

const DateFilter = ({ todos, onDateFilterChange, value }) => {
  return (
    <div>
      <Popover
        content={<DateSelector todos={todos} onSelect={onDateFilterChange} />}
        position={Position.BOTTOM_LEFT}
        minimal
      >
        <AnchorButton
          minimal
          rightIcon="caret-down"
          icon="time"
          className={styles.button}
        >
          {value.key}
        </AnchorButton>
      </Popover>
    </div>
  )
}

DateFilter.propTypes = {
  value: PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.object,
  }).isRequired,
  onDateFilterChange: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DateFilter
