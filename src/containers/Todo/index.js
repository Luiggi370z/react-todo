import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContentLayout, Overlay } from 'components/layout'
import { TodoAdd, Summary } from 'components/Todo'
import TodosAll from './MyDay'
import TodosNew from './New'

import { rootSelector, todosSummarySelector } from 'store/selectors'
import { toggleView } from 'store/actions/root'

const mapStateToProps = state => ({
  ...rootSelector(state),
  ...todosSummarySelector(state)
})

const mapDispatchToProps = dispatch => ({
  changeView: () => dispatch(toggleView())
})

export class Todos extends Component {
  render() {
    const { viewAll, pendingTodos, changeView } = this.props

    return (
      <ContentLayout
        activeRight={!viewAll}
        left={<TodosNew />}
        right={<TodosAll />}
        overlay={
          <Overlay
            left={<Summary todos={pendingTodos} toggleView={changeView} />}
            right={<TodoAdd toggleView={changeView} />}
          />
        }
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
