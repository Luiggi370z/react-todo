import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core'
import {
  format,
  isToday,
  isTomorrow,
  isThisWeek,
  isThisYear,
  isAfter,
  isBefore,
  endOfWeek
} from 'date-fns'

import styles from './index.module.scss'

const formatDate = date => {
  if (isToday(date)) return 'Today'
  if (isTomorrow(date)) return 'Tomorrow'
  if (isThisWeek(date)) return format(date, 'dddd')
  return format(date, `MMM Do${!isThisYear(date) ? ', YYYY' : ''}`)
}

const groupByDate = (list, filterBy) =>
  list.filter(filterBy).reduce((r, acc) => {
    const key = formatDate(acc.date)
    r[key] = [...(r[key] || []), acc]
    return r
  }, {})

const getFilters = obj =>
  Object.keys(obj).map(key => (
    <MenuItem key={key} text={key} label={obj[key].length} />
  ))

const getStats = list => ({
  totalToday: list.filter(todo => isToday(todo.date)).length,
  thisWeek: groupByDate(
    list,
    todo =>
      isAfter(todo.date, new Date()) &&
      isBefore(todo.date, endOfWeek(new Date()))
  ),
  upcoming: groupByDate(list, todo => !isThisWeek(todo.date))
})

const DateSelector = props => {
  const { totalToday, thisWeek, upcoming } = getStats(props.todos)

  return (
    <Menu className={styles.root}>
      <MenuItem text='Today' label={totalToday} />
      {getFilters(thisWeek)}
      <MenuDivider title='Upcoming' />
      {getFilters(upcoming)}
      {!Object.entries(upcoming).length && (
        <MenuItem text='Nothing yet!' disabled />
      )}
    </Menu>
  )
}

DateSelector.propTypes = {
  todos: PropTypes.array.isRequired
}

export default memo(DateSelector)
