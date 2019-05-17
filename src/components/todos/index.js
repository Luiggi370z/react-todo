import React, { Component } from 'react'
import { format } from 'date-fns'
import { Spinner, Button, ButtonGroup, AnchorButton } from '@blueprintjs/core'
import Header from '../header'
import Todo from './todo.js'
import styles from './index.module.scss'

export class Todos extends Component {
  render() {
    const progress = (
      <div className={styles.progress}>
        <Spinner size={55} value={0.7} />
        <span>70% Done</span>
      </div>
    )

    return (
      <div className={styles.root}>
        <Header
          title={'My Todos'}
          subtitle={format(new Date(), 'MMM D, YYYY')}
          action={progress}
        />
        <div className={styles.list}>
          <div className={styles.toolbar}>
            <div className={styles.filter}>
              <AnchorButton rightIcon='caret-down' minimal>
                Today
              </AnchorButton>
            </div>
            <div className={styles.actions}>
              <ButtonGroup minimal>
                <AnchorButton rightIcon='caret-down' icon='filter'>
                  All
                </AnchorButton>
                <Button icon='tick' />
                <Button icon='trash' />
              </ButtonGroup>
            </div>
          </div>
          {this.props.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    )
  }
}

export default Todos
