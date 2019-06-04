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
import { EmptySpace } from 'components/ui'
import { DateFilter } from 'components/Todo'
import { CSSTransition } from 'react-transition-group'
import styles from './index.module.scss'
import MyDayBody from './body'

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
    const listProps = { onScroll: this.handleScroll }
    ;({
      filteredTodos: listProps.todos,
      toggleTodoStatus: listProps.toggleTodoStatus,
      deleteTodo: listProps.deleteTodo
    } = this.props)

    const {
      todos,
      dateFilter,
      totalTodosByDate,
      totalPendingTodos
    } = this.props

    const toolbarProps = {
      statusFilter: this.props.statusFilter,
      todos: this.props.todos,
      onStatusFilterChange: this.handleStatusFilterChange,
      scrolled: this.state.scrolled,
      onCompleteAll: this.handleCompleteAll,
      onDeleteAll: this.handleDeleteAll
    }

    const hasTodos = totalTodosByDate > 0

    return (
      <div className={styles.root}>
        <Header
          title='My Tasks'
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

        <CSSTransition
          classNames='item'
          timeout={300}
          in={hasTodos}
          exit={false}
          unmountOnExit>
          <MyDayBody listProps={listProps} toolbarProps={toolbarProps} />
        </CSSTransition>

        <CSSTransition
          classNames='item'
          timeout={300}
          in={!hasTodos}
          exit={false}
          unmountOnExit>
          <EmptySpace
            icon='timeline-events'
            message={`No Tasks for ${dateFilter.key}`}
          />
        </CSSTransition>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAll)
