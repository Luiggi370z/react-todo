import React, { Fragment } from 'react'
import { Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const TodoAdd = () => {
  return (
    <Fragment>
      <h1>Hi!</h1>
      <p className={styles.description}>
        Nothing to do yet? Think about it and add a new todo
      </p>
      <Button large minimal className='panel-button'>
        Add
      </Button>
    </Fragment>
  )
}

export default TodoAdd
