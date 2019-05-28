import React, { Component } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { todosListSelector } from 'store/selectors'
import {
  completeAll,
  toggleTodoStatus,
  deleteAll,
  deleteTodo
} from 'store/actions/todo'

import Header from 'components/layout/Header'
import { Progress, Toolbar, TodoList } from 'components/Todo'

import styles from './index.module.scss'

const mapStateToProps = state => todosListSelector(state)

const mapDispatchToProps = dispatch => ({
  completeAll: () => dispatch(completeAll()),
  deleteAll: () => dispatch(deleteAll()),
  deleteTodo: id => dispatch(deleteTodo(id)),
  toggleTodoStatus: id => dispatch(toggleTodoStatus(id))
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

  handleStatusFilterChange = status => this.setState({ show: status })

  render() {
    const toolbarProps = {}
    const listProps = {}
    ;({
      statusFilter: toolbarProps.statusFilter,
      statusFilter: toolbarProps.dateFilter,
      toggleTodoStatus: listProps.toggleTodoStatus,
      deleteTodo: listProps.deleteTodo
    } = this.props)

    const { todos } = this.props

    return (
      <div className={styles.root}>
        <Header
          title='My Todos'
          subtitle={format(new Date(), 'MMM D, YYYY')}
          action={<Progress todos={todos} />}
        />
        <Toolbar
          todos={todos}
          {...toolbarProps}
          scrolled={this.state.scrolled}
          onStatusFilterChange={this.handleStatusFilterChange}
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
