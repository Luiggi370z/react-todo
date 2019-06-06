import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { todosListSelector } from 'store/selectors'
import * as TodoActions from 'store/actions/todo'
import Header from 'components/layout/Header'
import { EmptySpace } from 'components/ui'
import { DateFilter } from 'components/Todo'
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.scss'
import MyDayBody from './body'

const mapStateToProps = state => todosListSelector(state)

const mapDispatchToProps = dispatch => ({
  completeAll: date => dispatch(TodoActions.completeAll(date)),
  deleteAll: date => dispatch(TodoActions.deleteAll(date)),
  deleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
  toggleTodoStatus: id => dispatch(TodoActions.toggleTodoStatus(id)),
  updateDateFilter: filter => dispatch(TodoActions.updateDateFilter(filter)),
  updateStatusFilter: status =>
    dispatch(TodoActions.updateStatusFilter(status)),
})

const TodoAll = props => {
  const [scrolled, setScrolled] = useState(false)
  const {
    todos,
    filteredTodos,
    dateFilter,
    statusFilter,
    totalTodosByDate,
    totalPendingTodos,
    toggleTodoStatus,
    deleteTodo,
  } = props

  const handleScroll = e => {
    const { target: element } = e

    if (element.scrollHeight - element.scrollTop > element.offsetHeight + 5)
      setScrolled(true)
    else setScrolled(false)
  }

  const handleStatusFilterChange = status => props.updateStatusFilter(status)

  const handleDateFilterChange = filter => props.updateDateFilter(filter)

  const handleCompleteAll = () => props.completeAll(dateFilter.value)

  const handleDeleteAll = () => props.deleteAll(dateFilter.value)

  const listProps = {
    onScroll: handleScroll,
    todos: filteredTodos,
    toggleTodoStatus,
    deleteTodo,
  }

  const toolbarProps = {
    statusFilter,
    todos,
    onStatusFilterChange: handleStatusFilterChange,
    scrolled,
    onCompleteAll: handleCompleteAll,
    onDeleteAll: handleDeleteAll,
  }

  const hasTodos = totalTodosByDate > 0

  return (
    <div className={styles.root}>
      <Header
        title="My Tasks"
        rightContent={
          hasTodos && (
            <div className={styles.totals}>
              {`${totalPendingTodos} of ${totalTodosByDate}`}
            </div>
          )
        }
      >
        <div>
          <DateFilter
            todos={todos}
            value={dateFilter}
            onDateFilterChange={handleDateFilterChange}
          />
          {/* <Progress todos={todos} /> */}
        </div>
      </Header>

      <CSSTransition
        classNames="item"
        timeout={300}
        in={hasTodos}
        exit={false}
        unmountOnExit
      >
        <MyDayBody listProps={listProps} toolbarProps={toolbarProps} />
      </CSSTransition>

      <CSSTransition
        classNames="item"
        timeout={300}
        in={!hasTodos}
        exit={false}
        unmountOnExit
      >
        <EmptySpace
          icon="timeline-events"
          message={`No Tasks for ${dateFilter.key}`}
        />
      </CSSTransition>
    </div>
  )
}

TodoAll.propTypes = {
  completeAll: PropTypes.func.isRequired,
  deleteAll: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodoStatus: PropTypes.func.isRequired,
  updateDateFilter: PropTypes.func.isRequired,
  updateStatusFilter: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  dateFilter: PropTypes.shape({
    value: PropTypes.instanceOf(Date),
    key: PropTypes.string,
  }).isRequired,
  statusFilter: PropTypes.string.isRequired,
  totalTodosByDate: PropTypes.number.isRequired,
  totalPendingTodos: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoAll)
