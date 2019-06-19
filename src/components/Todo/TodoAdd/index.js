import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const TodoAdd = ({ toggleView, hasTasks }) => {
  const message = `${
    hasTasks
      ? 'Nice! Looks like you have some stuff to do, but you can have more!'
      : "Nothing to do yet? Think about it and let's start!"
  }`

  return (
    <Fragment>
      <h1>Hi!</h1>
      <p data-test="message" className={styles.description}>
        {message}
      </p>
      <Button
        large
        minimal
        data-test="button"
        className="panel-button"
        onClick={toggleView}
      >
        Add Task
      </Button>
    </Fragment>
  )
}

TodoAdd.defaultProps = {
  hasTasks: false,
}
TodoAdd.propTypes = {
  toggleView: PropTypes.func.isRequired,
  hasTasks: PropTypes.bool,
}

export default TodoAdd
