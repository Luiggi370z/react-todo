import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Popover, Button, Switch, Position, Icon } from '@blueprintjs/core'
import { DateInput, TimePrecision } from '@blueprintjs/datetime'
import { format } from 'date-fns'
import { Avatar, InputGroup } from 'components/ui'
import Categories from 'mocks/categories'
import AvatarSelector from './AvatarSelector'
import CategorySelector from './CategorySelector'

const TodoForm = ({ newTodo, addTodo, updateField }) => {
  const { description, location, date, icon, category, isAllDay } = newTodo

  const formatDate = date =>
    format(date, `MM/DD/YYYY${isAllDay ? '' : ' hh:mm A'}`)

  const handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    updateField({ field: target.name, value })
  }

  const handleClear = field => updateField({ field, value: '' })

  const handleDateChange = (date, isUserChange) => {
    if (isUserChange) updateField({ field: 'date', value: date })
  }

  const handleAddTodo = () => addTodo(newTodo)
  const minDateTime = new Date()
  const canSave = description && location && date && icon
  const timePrecision = isAllDay ? undefined : TimePrecision.MINUTE
  const timePickerProps = isAllDay ? undefined : { minTime: minDateTime }

  return (
    <form className={styles.form}>
      <div className={styles.todoIcon}>
        <Popover
          canEscapeKeyClose
          content={<AvatarSelector onSelect={handleChange} field='icon' />}
          position={Position.BOTTOM}>
          <Avatar
            large
            icon={icon || 'plus'}
            disabled={!icon}
            badge={
              icon && <Icon icon='edit' size={'12'} className={styles.badge} />
            }
          />
        </Popover>
      </div>
      <div className={styles.category}>
        <Popover
          minimal
          canEscapeKeyClose
          content={
            <CategorySelector onSelect={handleChange} field='category' />
          }
          position={Position.BOTTOM_LEFT}>
          <InputGroup
            className={styles[category]}
            value={Categories[category]}
            canClear={false}
            readOnly>
            <Icon icon='symbol-circle' />
          </InputGroup>
        </Popover>
      </div>
      <div>
        <InputGroup
          name='description'
          placeholder='What I have to do? *'
          value={description}
          autoComplete='off'
          onChange={handleChange}
          onClear={handleClear}
        />
      </div>
      <div>
        <InputGroup
          name='location'
          placeholder='Where? *'
          value={location}
          autoComplete='off'
          onChange={handleChange}
          onClear={handleClear}
        />
      </div>
      <div className={styles.date}>
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
            onChange={handleDateChange}
            value={date}
          />
        </div>
        <div className={styles.allDay}>
          <Switch
            label='All day'
            checked={isAllDay}
            name='isAllDay'
            onChange={handleChange}
          />
        </div>
      </div>
      <label className={styles.hint}>* Required fields</label>
      <Button
        large
        minimal
        fill
        className={styles.saveButton}
        disabled={!canSave}
        onClick={handleAddTodo}>
        ADD TODO
      </Button>
    </form>
  )
}

export default TodoForm
