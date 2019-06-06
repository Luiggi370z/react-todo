import { createSelector } from 'reselect'
import { isToday, isSameDay, isFuture } from 'date-fns'

export const todosListSelector = createSelector(
  state => state.todos.todos,
  state => state.todos.filters.date,
  state => state.todos.filters.status,
  (todos, dateFilter, statusFilter) => {
    const todosByDate = todos.filter(todo =>
      isSameDay(todo.date, dateFilter.value),
    )
    const totalPendingTodos = todosByDate.filter(todo => !todo.done).length
    const filteredTodos =
      statusFilter === 'All'
        ? todosByDate
        : todosByDate.filter(todo =>
            statusFilter === 'Done' ? todo.done : !todo.done,
          )

    return {
      todos,
      dateFilter,
      statusFilter,
      totalTodosByDate: todosByDate.length,
      totalPendingTodos,
      filteredTodos,
    }
  },
)

export const todosSummarySelector = createSelector(
  state =>
    state.todos.todos.filter(
      todo => (isToday(todo.date) || isFuture(todo.date)) && !todo.done,
    ),
  pendingTodos => ({ pendingTodos }),
)

export const todoNewSelector = createSelector(
  state => state.todos.todos.filter(todo => isToday(todo.date)).length,
  totalTodosToday => ({
    totalTodosToday,
  }),
)

export const rootSelector = createSelector(
  state => state.root.viewAll,
  viewAll => ({ viewAll }),
)
