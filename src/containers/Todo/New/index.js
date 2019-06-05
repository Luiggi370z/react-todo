import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { todoNewSelector } from 'store/selectors'
import { addTodo } from 'store/actions/todo'
import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'

const mapStateToProps = state => todoNewSelector(state)

const mapDispatchToProps = dispatch => ({
  addTodo: newTodo => dispatch(addTodo(newTodo))
})

class TodoNew extends Component {
  static propTypes = {
    totalTodosToday: PropTypes.number.isRequired
  }

  render() {
    const { totalTodosToday, addTodo } = this.props
    const subtitle = `${totalTodosToday} task${
      totalTodosToday !== 1 ? 's' : ''
    } for today`

    return (
      <Fragment>
        <Header title={'New Task'} subtitle={subtitle} invert />
        <TodoForm addTodo={addTodo} />
      </Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoNew)
