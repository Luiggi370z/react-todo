import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Popover, Button, Switch, Position, Classes } from '@blueprintjs/core'
import { DatePicker, TimePrecision } from '@blueprintjs/datetime'

import Header from '../header'
import TodoIcon from '../todoIcon'
import IconSelector from '../iconSelector'
import CategorySelector from './categorySelector'

class NewTodo extends Component {
  static propTypes = {
    prop: PropTypes
  }

  state = {
    category: 1,
    description: '',
    location: '',
    date: new Date(),
    isAllDay: false
  }

  render() {
    return (
      <div>
        <Header title={'New thing'} subtitle={'5 tasks for today'} />
        <div className={styles.todoIcon}>
          <Popover
            minimal
            canEscapeKeyClose
            content={<IconSelector />}
            position={Position.BOTTOM}>
            <TodoIcon icon={'plus'} />
          </Popover>
        </div>
        <form className={styles.form}>
          <div className={styles.category}>
            <Popover
              minimal
              canEscapeKeyClose
              content={<CategorySelector />}
              position={Position.BOTTOM_LEFT}>
              <input placeholder='category' readOnly />
            </Popover>
          </div>
          <div>
            <div className={styles.inputGroup}>
              <input placeholder='What I have to do?' />
              <Button icon={'cross'} minimal />
            </div>
          </div>
          <div>
            <div className={styles.inputGroup}>
              <input placeholder='Where?' />
              <Button icon={'cross'} minimal />
            </div>
          </div>
          <div className={styles.date}>
            <Popover
              minimal
              autoFocus={false}
              enforceFocus={false}
              content={
                <div>
                  <DatePicker />
                </div>
              }
              position={Position.TOP}
              popoverClassName={'bp3-dateinput-popover'}>
              <div className={styles.inputGroup}>
                <input placeholder='When?' readOnly />
                <Button icon={'cross'} minimal />
              </div>
            </Popover>
            <div className={styles.allDay}>
              <Switch label='All day' />
            </div>
          </div>
          <Button large minimal fill>
            ADD TODO
          </Button>
        </form>
      </div>
    )
  }
}

export default NewTodo
