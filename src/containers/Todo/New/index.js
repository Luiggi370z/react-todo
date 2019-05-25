import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'

class TodoNew extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
        <Header title={'New ToDo'} subtitle={'5 tasks for today'} />
        <TodoForm />
      </div>
    )
  }
}

export default TodoNew
