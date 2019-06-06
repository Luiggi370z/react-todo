import * as Types from './action-types'

export const addTodo = todo => ({
  type: Types.ADD_TODO,
  payload: { todo },
})

export const deleteTodo = id => ({
  type: Types.DELETE_TODO,
  payload: { id },
})

export const toggleTodoStatus = id => ({
  type: Types.TOGGLE_TODO_STATUS,
  payload: { id },
})

export const completeAll = date => ({
  type: Types.COMPLETE_ALL_TODOS,
  payload: { date },
})

export const deleteAll = date => ({
  type: Types.DELETE_ALL_TODOS,
  payload: { date },
})

export const updateStatusFilter = status => ({
  type: Types.UPDATE_TODO_STATUS_FILTER,
  payload: { status },
})

export const updateDateFilter = ({ key, value }) => ({
  type: Types.UPDATE_TODO_DATE_FILTER,
  payload: {
    key,
    value,
  },
})
