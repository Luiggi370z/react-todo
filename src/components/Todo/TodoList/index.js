import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import TodoListItem from '../TodoListItem'

const TodoList = ({ todos, onScroll }) => {
  return (
    <div className={styles.list} onScroll={onScroll}>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onScroll: PropTypes.func.isRequired
}

export default TodoList
