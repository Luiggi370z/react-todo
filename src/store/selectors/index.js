import { createSelector } from 'reselect'

export const todosSelector = createSelector(
  state => state.todos.todos,
  state => state.todos.filters.date,
  state => state.todos.filters.status,
  (todos, dateFilter, statusFilter) => ({
    todos,
    dateFilter,
    statusFilter
  })
)

export const todoNewSelector = createSelector(
  state => state.todos.newTodo,
  newTodo => ({ newTodo })
)

export const rootSelector = createSelector(
  state => state.root.viewAll,
  viewAll => ({ viewAll })
)
