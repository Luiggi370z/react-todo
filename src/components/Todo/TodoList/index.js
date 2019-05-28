import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import TodoListItem from '../TodoListItem'

const TodoList = ({ todos, onScroll, toggleTodoStatus, deleteTodo }) => {
  return (
    <div className={styles.list} onScroll={onScroll}>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodoStatus}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onScroll: PropTypes.func.isRequired
}

export default TodoList
