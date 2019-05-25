import React, { Component } from 'react'
import { connect } from 'react-redux'
import { format } from 'date-fns'
import { todosSelector } from 'store/selectors'
import { completeAll } from 'store/actions/todo'

import Header from 'components/layout/Header'
import { Progress, Toolbar, TodoList } from 'components/Todo'

import styles from './index.module.scss'

const mapStateToProps = state => todosSelector(state)

const mapDispatchToProps = dispatch => ({
  completeAll: () => dispatch(completeAll())
})

class TodoAll extends Component {
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
    const { todos } = this.props

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
        <TodoList todos={todos} onScroll={this.handleScroll} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoAll)
