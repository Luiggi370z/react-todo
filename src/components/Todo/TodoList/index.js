import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './index.module.scss'
import TodoListItem from '../TodoListItem'

const TodoList = ({ todos, onScroll, toggleTodoStatus, deleteTodo }) => {
  return (
    <div className={styles.list} onScroll={onScroll}>
      <TransitionGroup>
        {todos.map(todo => (
          <CSSTransition key={todo.id} timeout={300} classNames="item">
            <TodoListItem
              todo={todo}
              onToggle={toggleTodoStatus}
              onDelete={deleteTodo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onScroll: PropTypes.func.isRequired,
  toggleTodoStatus: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoList
