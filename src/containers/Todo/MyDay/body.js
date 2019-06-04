import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { EmptySpace } from 'components/ui'
import { TodoList, Toolbar } from 'components/Todo'

const MyDayBody = ({ listProps, toolbarProps }) => {
  return (
    <React.Fragment>
      <CSSTransition
        classNames='item'
        timeout={300}
        in={!listProps.todos.length}
        exit={false}
        unmountOnExit>
        <EmptySpace
          icon='property'
          message={`No '${toolbarProps.statusFilter}' Tasks`}
        />
      </CSSTransition>
      {listProps.todos.length ? <TodoList {...listProps} /> : null}
      <Toolbar {...toolbarProps} />
    </React.Fragment>
  )
}

MyDayBody.propTypes = {
  listProps: PropTypes.object.isRequired,
  toolbarProps: PropTypes.object.isRequired
}

export default MyDayBody
