import React from 'react'
import PropTypes from 'prop-types'
import styles from './todo.module.scss'
import { format } from 'date-fns'
import { Button } from '@blueprintjs/core'
import TodoIcon from '../../todoIcon'

const Todo = ({ todo, onComplete }) => {
  const handleComplete = () => {
    onComplete(todo.id)
  }

  return (
    <div className={`${styles.root} ${todo.done ? styles.done : ''}`}>
      <TodoIcon icon={todo.icon} disabled={todo.done} />
      <div className={styles.content}>
        <div className={styles.title}>{todo.description}</div>
        <div className={styles.subTitle}>{todo.location}</div>
      </div>
      <div className={styles.details}>
        <span className={styles.date}>{format(todo.date, 'ha')}</span>
        <div className={styles.actions}>
          {!todo.done && (
            <Button icon={'tick'} minimal onClick={handleComplete} />
          )}
          <Button icon={'trash'} minimal />
        </div>
      </div>
    </div>
  )
}

Todo.propTypes = {}

export default Todo
