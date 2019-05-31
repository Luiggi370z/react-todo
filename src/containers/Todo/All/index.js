import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todosListSelector } from 'store/selectors'
import {
  completeAll,
  toggleTodoStatus,
  deleteAll,
  deleteTodo,
  updateDateFilter,
  updateStatusFilter
} from 'store/actions/todo'
import { Icon } from '@blueprintjs/core'
import Header from 'components/layout/Header'
import { Progress, Toolbar, TodoList, DateFilter } from 'components/Todo'

import styles from './index.module.scss'

const mapStateToProps = state => todosListSelector(state)

const mapDispatchToProps = dispatch => ({
  completeAll: date => dispatch(completeAll(date)),
  deleteAll: date => dispatch(deleteAll(date)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleTodoStatus: id => dispatch(toggleTodoStatus(id)),
  updateDateFilter: filter => dispatch(updateDateFilter(filter)),
  updateStatusFilter: status => dispatch(updateStatusFilter(status))
})

class TodoAll extends Component {
  state = {
    scrolled: false
  }

  handleScroll = e => {
    const { target: element } = e

    if (element.scrollHeight - element.scrollTop > element.offsetHeight + 5)
      this.setState({ scrolled: true })
    else this.setState({ scrolled: false })
  }
  handleStatusFilterChange = status => this.props.updateStatusFilter(status)
  handleDateFilterChange = filter => this.props.updateDateFilter(filter)
  handleCompleteAll = () => this.props.completeAll(this.props.dateFilter.value)
  handleDeleteAll = () => this.props.deleteAll(this.props.dateFilter.value)

  render() {
    const listProps = {}
    ;({
      filteredTodos: listProps.todos,
      toggleTodoStatus: listProps.toggleTodoStatus,
      deleteTodo: listProps.deleteTodo
    } = this.props)

    const {
      todos,
      dateFilter,
      totalTodosByDate,
      totalPendingTodos,
      statusFilter
    } = this.props

    const hasTodos = totalTodosByDate > 0

    return (
      <div className={styles.root}>
        <Header
          title='My Todos'
          rightContent={
            hasTodos && (
              <div className={styles.totals}>
                {totalPendingTodos} of {totalTodosByDate}
              </div>
            )
          }>
          <div>
            <DateFilter
              todos={todos}
              value={dateFilter}
              onDateFilterChange={this.handleDateFilterChange}
            />
            {/* <Progress todos={todos} /> */}
          </div>
        </Header>

        {hasTodos && (
          <React.Fragment>
            <TodoList {...listProps} onScroll={this.handleScroll} />
            <Toolbar
              statusFilter={statusFilter}
              todos={todos}
              onStatusFilterChange={this.handleStatusFilterChange}
              scrolled={this.state.scrolled}
              onCompleteAll={this.handleCompleteAll}
              onDeleteAll={this.handleDeleteAll}
            />
          </React.Fragment>
        )}

        {!hasTodos && (
          <div className={styles.noTasks}>
            <Icon icon='timeline-events' iconSize={62} />
            <p>No Tasks for {dateFilter.key}</p>
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAll)
