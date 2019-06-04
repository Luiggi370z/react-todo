import React from 'react'
import { format } from 'date-fns'
import { Position } from '@blueprintjs/core'
import { DateInput, TimePrecision } from '@blueprintjs/datetime'
import PropTypes from 'prop-types'

const DateTimeInput = ({ date, isAllDay, onSelect }) => {
  const minDateTime = new Date()
  const formatDate = date =>
    format(date, `MM/DD/YYYY${isAllDay ? '' : ' hh:mm A'}`)
  const timePrecision = isAllDay ? undefined : TimePrecision.MINUTE
  const timePickerProps = isAllDay ? undefined : { minTime: minDateTime }

  return (
    <div>
      <DateInput
        closeOnSelection={isAllDay}
        canClearSelection={false}
        placeholder='When? *'
        minDate={minDateTime}
        inputProps={{ readOnly: true }}
        formatDate={formatDate}
        parseDate={str => new Date(str)}
        timePrecision={timePrecision}
        timePickerProps={timePickerProps}
        popoverProps={{ position: Position.TOP }}
        onChange={onSelect}
        value={date}
      />
    </div>
  )
}

DateTimeInput.propTypes = {
  date: PropTypes.object,
  isAllDay: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default DateTimeInput
