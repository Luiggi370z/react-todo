import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContentLayout, Overlay } from 'components/layout'
import { TodoAdd, Summary } from 'components/Todo'
import TodosAll from './All'
import TodosNew from './New'

import { rootSelector } from 'store/selectors'
import { toggleView } from 'store/actions/root'

const mapStateToProps = state => rootSelector(state)

const mapDispatchToProps = dispatch => ({
  changeView: () => dispatch(toggleView())
})

export class Todos extends Component {
  render() {
    return (
      <ContentLayout
        activeRight={!this.props.viewAll}
        left={<TodosAll />}
        right={<TodosNew />}
        overlay={
          <Overlay
            left={<Summary todos={[]} toggleView={this.props.changeView} />}
            right={<TodoAdd toggleView={this.props.changeView} />}
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
