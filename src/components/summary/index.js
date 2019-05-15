import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Button } from '@blueprintjs/core'
import Categories from '../../mocks/categories'

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
        {Categories.map(category => (
          <div key={category.id}>
            <div className={styles.label}>{category.name}</div>
            <div className={styles.category}>
              <div class={`category-dot ${category.name.toLowerCase()}`} />
            </div>
            <div className={styles.value}>{countByCategory(category.id)}</div>
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
