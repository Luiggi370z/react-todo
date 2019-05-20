import React, { Component } from 'react'
import {
  format,
  isToday,
  isTomorrow,
  isYesterday,
  isThisWeek,
  isThisYear
} from 'date-fns'
import {
  Spinner,
  Button,
  ButtonGroup,
  AnchorButton,
  Popover,
  Position
} from '@blueprintjs/core'
import Header from '../header'
import Todo from './todo.js'
import StatusSelector from './statusSelector'
import styles from './index.module.scss'

export class Todos extends Component {
  state = {
    scrolled: false,
    show: 'All',
    date: new Date()
  }

  handleScroll = e => {
    if (e.target.scrollTop > 10) this.setState({ scrolled: true })
    else this.setState({ scrolled: false })
  }

  handleStatusFilterChange = status => this.setState({ show: status })

  formatDateFilter = () => {
    const { date } = this.state
    if (isToday(date)) return 'Today'
    if (isTomorrow(date)) return 'Tomorrow'
    if (isYesterday(date)) return 'Yesterday'
    if (isThisWeek(date)) return format(date, 'dddd')
    return format(date, `MMM Do${isThisYear(date) ? ', YYYY' : ''}`)
  }

  render() {
    const completed = this.props.todos.filter(t => t.done).length
    const percentage = completed
      ? parseFloat(completed / this.props.todos.length).toFixed(2)
      : 0

    const progress = (
      <div className={styles.progress}>
        <Spinner size={55} value={percentage} />
        <span>{percentage * 100}% done</span>
      </div>
    )

    return (
      <div className={styles.root}>
        <Header
          title={'My Todos'}
          subtitle={format(new Date(), 'MMM D, YYYY')}
          action={progress}
        />
        <div
          className={`${styles.toolbar} ${
            this.state.scrolled ? styles.scrolled : ''
          }`}>
          <div className={styles.filter}>
            <ButtonGroup minimal>
              <Popover position={Position.BOTTOM_LEFT} minimal>
                <AnchorButton rightIcon='caret-down' icon='calendar'>
                  Tomorrow
                </AnchorButton>
              </Popover>
              <Popover
                content={
                  <StatusSelector onSelect={this.handleStatusFilterChange} />
                }
                position={Position.BOTTOM_LEFT}
                minimal>
                <AnchorButton rightIcon='caret-down' icon='eye-open'>
                  {this.state.show}
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
        <div className={styles.list} onScroll={this.handleScroll}>
          {this.props.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    )
  }
}

export default Todos
