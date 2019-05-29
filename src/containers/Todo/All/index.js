import React, { Component } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
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
  completeAll: () => dispatch(completeAll()),
  deleteAll: () => dispatch(deleteAll()),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleTodoStatus: id => dispatch(toggleTodoStatus(id)),
  updateDateFilter: filter => dispatch(updateDateFilter(filter)),
  updateStatusFilter: status => dispatch(updateStatusFilter(status))
})

class TodoAll extends Component {
  state = {
    scrolled: false,
    show: 'All',
    date: new Date()
  }

  handleScroll = e => {
    if (e.target.scrollTop > 10) this.setState({ scrolled: true })
    else this.setState({ scrolled: false })
  }

  handleStatusFilterChange = status => this.props.updateStatusFilter(status)
  handleDateFilterChange = filter => this.props.updateDateFilter(filter)

  render() {
    const toolbarProps = {
      onStatusFilterChange: this.handleStatusFilterChange
    }
    const listProps = {}
    ;({
      statusFilter: toolbarProps.statusFilter,
      completeAll: toolbarProps.completeAll,
      deleteAll: toolbarProps.deleteAll,
      toggleTodoStatus: listProps.toggleTodoStatus,
      deleteTodo: listProps.deleteTodo
    } = this.props)

    const { todos } = this.props

    return (
      <div className={styles.root}>
        <Header title='My Todos'>
          <div className={styles.subtitleWrapper}>
            <DateFilter
              todos={todos}
              value={this.props.dateFilter}
              onDateFilterChange={this.handleDateFilterChange}
            />
            <Progress todos={todos} />
          </div>
        </Header>

        <Toolbar
          todos={todos}
          {...toolbarProps}
          scrolled={this.state.scrolled}
        />

        <TodoList todos={todos} onScroll={this.handleScroll} {...listProps} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAll)
