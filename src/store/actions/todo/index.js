import * as Types from './action-types'

export const addTodo = payload => ({
  type: Types.ADD_TODO,
  payload: {
    ...payload,
    id: `${Date.now()}`
  }
})

export const deleteTodo = payload => ({
  type: Types.DELETE_TODO,
  payload
})

export const toggleStatusTodo = payload => ({
  type: Types.TOGGLE_TODO_STATUS,
  payload
})

export const completeAll = () => ({
  type: Types.COMPLETE_ALL_TODOS
})

export const deleteAll = payload => ({
  type: Types.DELETE_ALL_TODOS,
  payload
})

export const updateStatusFilter = payload => ({
  type: Types.UPDATE_TODO_STATUS_FILTER,
  payload
})

export const updateDateFilter = payload => ({
  type: Types.UPDATE_TODO_DATE_FILTER,
  payload
})

export const updateField = payload => ({
  type: Types.UPDATE_NEW_TODO_FIELD,
  payload
})
