import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Popover, Button, Switch, Position, Icon } from '@blueprintjs/core'
import { DateInput, TimePrecision } from '@blueprintjs/datetime'
import { format } from 'date-fns'
import Header from '../header'
import TodoIcon from '../todoIcon'
import IconSelector from '../iconSelector'
import CategorySelector from './categorySelector'
import InputGroup from '../inputGroup'
import Categories from '../../mocks/categories'

class NewTodo extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    category: 1,
    description: '',
    location: '',
    date: null,
    isAllDay: false,
    icon: '',
    minTime: new Date(),
    minDate: new Date()
  }

  formatDate = date =>
    format(date, `MM/DD/YYYY${this.state.isAllDay ? '' : ' hh:mm A'}`)

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [target.name]: value })
  }

  handleClear = field => this.setState({ [field]: '' })

  handleDateChange = (date, isUserChange) => {
    if (isUserChange) this.setState({ date: date })
  }

  render() {
    const { description, location, date, icon, category } = this.state
    const canSave = description && location && date && icon

    return (
      <div>
        <Header title={'New ToDo'} subtitle={'5 tasks for today'} />
        <div className={styles.todoIcon}>
          <Popover
            canEscapeKeyClose
            content={
              <IconSelector onSelect={this.handleChange} field={'icon'} />
            }
            position={Position.BOTTOM}>
            <TodoIcon
              large
              icon={icon || 'plus'}
              disabled={!icon}
              badge={
                icon && (
                  <Icon icon='edit' size={'12'} className={styles.badge} />
                )
              }
            />
          </Popover>
        </div>
        <form className={styles.form}>
          <div className={styles.category}>
            <Popover
              minimal
              canEscapeKeyClose
              content={
                <CategorySelector
                  onSelect={this.handleChange}
                  field='category'
                />
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
              onChange={this.handleChange}
              onClear={this.handleClear}
            />
          </div>
          <div>
            <InputGroup
              name='location'
              placeholder='Where? *'
              value={location}
              autoComplete='off'
              onChange={this.handleChange}
              onClear={this.handleClear}
            />
          </div>
          <div className={styles.date}>
            <div>
              <DateInput
                closeOnSelection={this.state.isAllDay}
                placeholder='When? *'
                minDate={this.state.minDate}
                inputProps={{ readOnly: true }}
                formatDate={this.formatDate}
                parseDate={str => new Date(str)}
                timePrecision={
                  this.state.isAllDay ? undefined : TimePrecision.MINUTE
                }
                timePickerProps={
                  this.state.isAllDay
                    ? undefined
                    : { minTime: this.state.minTime }
                }
                popoverProps={{ position: Position.TOP }}
                onChange={this.handleDateChange}
                value={date}
              />
            </div>
            <div className={styles.allDay}>
              <Switch
                label='All day'
                checked={this.state.isAllDay}
                name='isAllDay'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <label className={styles.hint}>* Required fields</label>
          <Button
            large
            minimal
            fill
            className={styles.saveButton}
            disabled={!canSave}>
            ADD TODO
          </Button>
        </form>
      </div>
    )
  }
}

export default NewTodo
