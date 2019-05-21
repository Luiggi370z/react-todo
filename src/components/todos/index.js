import React, { Component } from 'react'
import { format } from 'date-fns'

import Header from '../header'
import Todo from './todo'
import Progress from '../progress'
import Toolbar from './toolbar'

import styles from './index.module.scss'

export class Todos extends Component {
  state = {
    scrolled: false,
    show: 'All',
    date: new Date()
  }

  handleScroll = e => {
    if (e.target.scrollTop > 10) this.setState({ scrolled: true })
    else this.setState({ scrolled: false })
  }

  handleStatusFilterChange = status => this.setState({ show: status })

  render() {
    const todos =
      this.state.show === 'All'
        ? this.props.todos
        : this.props.todos.filter(todo =>
            this.state.show === 'Done' ? todo.done : !todo.done
          )

    return (
      <div className={styles.root}>
        <Header
          title={'My Todos'}
          subtitle={format(new Date(), 'MMM D, YYYY')}
          action={<Progress todos={this.props.todos} />}
        />
        <Toolbar
          todos={this.props.todos}
          show={this.state.show}
          scrolled={this.state.scrolled}
          onStatusFilterChange={this.handleStatusFilterChange}
        />
        <div className={styles.list} onScroll={this.handleScroll}>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    )
  }
}

export default Todos
