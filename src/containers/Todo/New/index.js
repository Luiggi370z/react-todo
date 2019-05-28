import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { todoNewSelector } from 'store/selectors'
import { addTodo, updateField, toggleAllDayFlag } from 'store/actions/todo'
import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'

const mapStateToProps = state => todoNewSelector(state)

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
  updateField: payload => dispatch(updateField(payload)),
  toggleAllDayFlag: () => dispatch(toggleAllDayFlag())
})

class TodoNew extends Component {
  static propTypes = {
    totalTodosToday: PropTypes.number.isRequired,
    newTodo: PropTypes.object.isRequired
  }

  render() {
    const {
      totalTodosToday,
      newTodo,
      isAllDay,
      addTodo,
      updateField,
      toggleAllDayFlag
    } = this.props

    const todoFormProps = {
      newTodo,
      isAllDay,
      addTodo,
      updateField,
      toggleAllDayFlag
    }

    const subtitle = `${totalTodosToday} task${
      totalTodosToday !== 1 ? 's' : ''
    } for today`

    return (
      <div>
        <Header title={'New ToDo'} subtitle={subtitle} />
        <TodoForm {...todoFormProps} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoNew)
