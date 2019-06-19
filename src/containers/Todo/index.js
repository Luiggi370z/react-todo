import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ContentLayout, Overlay } from 'components/layout'
import { TodoAdd, Summary } from 'components/Todo'
import { rootSelector, todosSummarySelector } from 'store/selectors'
import toggleView from 'store/actions/root'
import TodosAll from './MyDay'
import TodosNew from './New'

const mapStateToProps = state => ({
  ...rootSelector(state),
  ...todosSummarySelector(state),
})

const mapDispatchToProps = dispatch => ({
  changeView: () => dispatch(toggleView()),
})

const Todos = props => {
  const { viewAll, pendingTodos, changeView } = props
  const overlay = (
    <Overlay
      left={<Summary todos={pendingTodos} toggleView={changeView} />}
      right={
        <TodoAdd toggleView={changeView} hasTasks={!!pendingTodos.length} />
      }
    />
  )

  return (
    <ContentLayout
      activeRight={!viewAll}
      left={<TodosNew />}
      right={<TodosAll />}
      overlay={overlay}
    />
  )
}

Todos.propTypes = {
  viewAll: PropTypes.bool,
  pendingTodos: PropTypes.arrayOf(PropTypes.object),
  changeView: PropTypes.func.isRequired,
}

Todos.defaultProps = {
  viewAll: false,
  pendingTodos: [],
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos)
