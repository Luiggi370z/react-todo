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
    if (e.target.scrollTop > 10) this.setState({ scrolled: true })
    else this.setState({ scrolled: false })
  }
  handleStatusFilterChange = status => this.props.updateStatusFilter(status)
  handleDateFilterChange = filter => this.props.updateDateFilter(filter)
  handleCompleteAll = () => this.props.completeAll(this.props.dateFilter.value)
  handleDeleteAll = () => this.props.deleteAll(this.props.dateFilter.value)

  render() {
    const toolbarProps = {}
    ;({
      statusFilter: toolbarProps.statusFilter,
      totalTodosByDate: toolbarProps.totalByDate,
      totalPendingTodos: toolbarProps.totalPending
    } = this.props)

    const listProps = {}
    ;({
      filteredTodos: listProps.todos,
      toggleTodoStatus: listProps.toggleTodoStatus,
      deleteTodo: listProps.deleteTodo
    } = this.props)

    const { todos, dateFilter } = this.props

    return (
      <div className={styles.root}>
        <Header title='My Todos'>
          <div className={styles.subtitleWrapper}>
            <DateFilter
              todos={todos}
              value={dateFilter}
              onDateFilterChange={this.handleDateFilterChange}
            />
            <Progress todos={todos} />
          </div>
        </Header>

        <Toolbar
          {...toolbarProps}
          todos={todos}
          onStatusFilterChange={this.handleStatusFilterChange}
          scrolled={this.state.scrolled}
          onCompleteAll={this.handleCompleteAll}
          onDeleteAll={this.handleDeleteAll}
        />

        <TodoList {...listProps} onScroll={this.handleScroll} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAll)
