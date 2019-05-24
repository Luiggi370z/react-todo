import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Button, Icon } from '@blueprintjs/core'
import Categories from 'mocks/categories'

const Summary = ({ todos }) => {
  const countByCategory = categoryId => {
    return todos.filter(todo => todo.category === categoryId).length
  }

  return (
    <React.Fragment>
      <h1>Summary</h1>
      <div className={styles.summary}>
        <div>
          <div className={styles.label}>All things</div>
          <div className={styles.value}>
            {todos.filter(todo => !todo.done).length}
          </div>
        </div>
        {Object.keys(Categories).map(key => (
          <div key={key}>
            <div className={styles.label}>{Categories[key]}</div>
            <div className={`${styles.category} ${styles[key]}`}>
              <Icon icon='symbol-circle' />
            </div>
            <div className={styles.value}>{countByCategory(key)}</div>
          </div>
        ))}
      </div>
      <Button large minimal className='panel-button'>
        VIEW TODOS
      </Button>
    </React.Fragment>
  )
}

Summary.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Summary
