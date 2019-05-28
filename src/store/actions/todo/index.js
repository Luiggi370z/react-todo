import * as Types from './action-types'

export const addTodo = newTodo => ({
  type: Types.ADD_TODO,
  payload: {
    ...newTodo,
    done: false,
    id: `${Date.now()}`
  }
})

export const deleteTodo = id => ({
  type: Types.DELETE_TODO,
  payload: { id }
})

export const toggleTodoStatus = id => ({
  type: Types.TOGGLE_TODO_STATUS,
  payload: { id }
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

export const updateField = ({ field, value }) => ({
  type: Types.UPDATE_NEW_TODO_FIELD,
  payload: {
    field,
    value
  }
})

export const toggleAllDayFlag = () => ({
  type: Types.TOGGLE_ALL_DAY_FLAG
})
