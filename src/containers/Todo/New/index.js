import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { todoNewSelector } from 'store/selectors'
import { addTodo } from 'store/actions/todo'
import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'

const mapStateToProps = state => todoNewSelector(state)

const mapDispatchToProps = dispatch => ({
  addNewTodo: newTodo => dispatch(addTodo(newTodo)),
})

const TodoNew = props => {
  const { totalTodosToday, addNewTodo } = props
  const subtitle = `${totalTodosToday} task${
    totalTodosToday !== 1 ? 's' : ''
  } for today`

  return (
    <Fragment>
      <Header title="New Task" subtitle={subtitle} invert />
      <TodoForm addNewTodo={addNewTodo} />
    </Fragment>
  )
}

TodoNew.propTypes = {
  totalTodosToday: PropTypes.number.isRequired,
  addNewTodo: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoNew)
