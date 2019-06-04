import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Button, Switch } from '@blueprintjs/core'
import { InputGroup } from 'components/ui'
import AvatarInput from './AvatarInput'
import CategoryInput from './CategoryInput'
import DateTimeInput from './DateTimeInput'

const TodoForm = ({ newTodo, addTodo, updateField }) => {
  const { description, location, date, icon, category, isAllDay } = newTodo

  const handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    updateField({ field: target.name, value })
  }

  const handleClear = field => updateField({ field, value: '' })

  const handleDateChange = (date, isUserChange) => {
    if (isUserChange) updateField({ field: 'date', value: date })
  }

  const handleAddTodo = () => addTodo(newTodo)
  const canSave = description && location && date && icon

  return (
    <form className={styles.form}>
      <div className={styles.todoIcon}>
        <AvatarInput icon={icon} onSelect={handleChange} />
      </div>
      <div className={styles.category}>
        <CategoryInput category={category} onSelect={handleChange} />
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
        <DateTimeInput
          date={date}
          isAllDay={isAllDay}
          onSelect={handleDateChange}
        />
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
        ADD TASK
      </Button>
    </form>
  )
}

TodoForm.propTypes = {
  newTodo: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired
}

export default TodoForm
