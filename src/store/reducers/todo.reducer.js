import * as Actions from 'store/actions/todo/action-types'
import { isSameDay } from 'date-fns'

const newTodo = {
  category: 1
}

const updateFilter = filterName => (state, payload) => ({
  ...state,
  filters: {
    ...state.filters,
    [filterName]: {
      key: payload.key,
      value: payload.value
    }
  }
})

const initialState = {
  newTodo,
  todos: [],
  filters: {
    date: {
      key: 'Today',
      value: new Date()
    },
    status: {
      key: 'All',
      value: null
    }
  }
}

const reducer = {
  [Actions.ADD_TODO]: (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
    newTodo
  }),
  [Actions.DELETE_TODO]: (state, payload) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id === payload.id)
  }),
  [Actions.TOGGLE_TODO_STATUS]: (state, payload) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === payload.id ? { ...todo, done: !todo.done } : todo
    )
  }),
  [Actions.COMPLETE_ALL_TODOS]: (state, payload) => ({
    ...state,
    todos: state.todos.map(todo =>
      !todo.done && isSameDay(todo.date, payload.date)
        ? { ...todo, done: true }
        : todo
    )
  }),
  [Actions.DELETE_ALL_TODOS]: (state, payload) => ({
    ...state,
    todos: state.todos.filter(todo => isSameDay(todo.date, payload.date))
  }),
  [Actions.UPDATE_TODO_DATE_FILTER]: updateFilter('date'),
  [Actions.UPDATE_TODO_STATUS_FILTER]: updateFilter('status'),
  [Actions.UPDATE_NEW_TODO_FIELD]: (state, payload) => ({
    ...state,
    newTodo: {
      ...state.newTodo,
      [payload.field]: payload.value
    }
  })
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
