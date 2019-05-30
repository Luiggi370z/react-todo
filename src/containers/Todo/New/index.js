import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { todoNewSelector } from 'store/selectors'
import { addTodo, updateField } from 'store/actions/todo'
import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'

const mapStateToProps = state => todoNewSelector(state)

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo)),
  updateField: payload => dispatch(updateField(payload))
})

class TodoNew extends Component {
  static propTypes = {
    totalTodosToday: PropTypes.number.isRequired,
    newTodo: PropTypes.object.isRequired
  }

  render() {
    const { totalTodosToday, newTodo, addTodo, updateField } = this.props

    const todoFormProps = {
      newTodo,
      addTodo,
      updateField
    }

    const subtitle = `${totalTodosToday} task${
      totalTodosToday !== 1 ? 's' : ''
    } for today`

    return (
      <Fragment>
        <Header title={'New ToDo'} subtitle={subtitle} />
        <TodoForm {...todoFormProps} />
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoNew)
