import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { format } from 'date-fns'
import { Button } from '@blueprintjs/core'
import Avatar from 'components/ui/Avatar'

const Todo = ({ todo, onComplete }) => {
  const handleComplete = () => {
    onComplete(todo.id)
  }

  return (
    <div className={`${styles.root} ${todo.done ? styles.done : ''}`}>
      <Avatar icon={todo.icon} disabled={todo.done} />
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

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
}

export default Todo
