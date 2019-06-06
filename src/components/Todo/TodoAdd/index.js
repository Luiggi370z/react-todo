import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const TodoAdd = ({ toggleView }) => {
  return (
    <Fragment>
      <h1>Hi!</h1>
      <p className={styles.description}>
        Nothing to do yet? Think about it and let&lsquo;s get start!
      </p>
      <Button large minimal className="panel-button" onClick={toggleView}>
        Add Task
      </Button>
    </Fragment>
  )
}

TodoAdd.propTypes = {
  toggleView: PropTypes.func.isRequired,
}

export default TodoAdd
