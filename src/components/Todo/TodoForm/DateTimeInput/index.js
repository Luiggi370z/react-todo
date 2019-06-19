import React from 'react'
import { format } from 'date-fns'
import { Position } from '@blueprintjs/core'
import { DateInput, TimePrecision } from '@blueprintjs/datetime'
import PropTypes from 'prop-types'

const DateTimeInput = ({ date, isAllDay, onSelect }) => {
  const minDateTime = new Date()
  const formatDate = value =>
    format(value, `MM/DD/YYYY${isAllDay ? '' : ' hh:mm a'}`)
  const timePrecision = isAllDay ? undefined : TimePrecision.MINUTE

  return (
    <div>
      <DateInput
        closeOnSelection={isAllDay}
        canClearSelection={false}
        placeholder="When? *"
        minDate={minDateTime}
        inputProps={{ readOnly: true }}
        formatDate={formatDate}
        parseDate={str => new Date(str)}
        timePrecision={timePrecision}
        timePickerProps={{ useAmPm: true }}
        popoverProps={{ position: Position.TOP }}
        onChange={onSelect}
        value={date}
      />
    </div>
  )
}

DateTimeInput.propTypes = {
  date: PropTypes.instanceOf(Date),
  isAllDay: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
}

DateTimeInput.defaultProps = {
  date: null,
}

export default DateTimeInput
