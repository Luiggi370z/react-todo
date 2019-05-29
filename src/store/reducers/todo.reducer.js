import * as Actions from 'store/actions/todo/action-types'
import { isSameDay } from 'date-fns'

const newTodo = {
  category: '1',
  description: '',
  location: '',
  date: null,
  icon: ''
}

const initialState = {
  newTodo,
  isAllDay: false,
  todos: [],
  filters: {
    date: {
      key: 'Today',
      value: new Date()
    },
    status: 'All'
  }
}

const reducer = {
  [Actions.ADD_TODO]: (state, payload) => ({
    ...state,
    todos: [...state.todos, { ...payload }],
    newTodo
  }),
  [Actions.DELETE_TODO]: (state, payload) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload.id)
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
  [Actions.UPDATE_TODO_DATE_FILTER]: (state, payload) => ({
    ...state,
    filters: {
      ...state.filters,
      date: {
        key: payload.key,
        value: payload.value
      }
    }
  }),
  [Actions.UPDATE_TODO_STATUS_FILTER]: (state, payload) => ({
    ...state,
    filters: {
      ...state.filters,
      status: payload.status
    }
  }),
  [Actions.UPDATE_NEW_TODO_FIELD]: (state, payload) => ({
    ...state,
    newTodo: {
      ...state.newTodo,
      [payload.field]: payload.value
    }
  }),
  [Actions.TOGGLE_ALL_DAY_FLAG]: state => ({
    ...state,
    isAllDay: !state.isAllDay
  })
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
