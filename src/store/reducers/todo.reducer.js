import * as Actions from 'store/actions/todo/action-types'
import { isSameDay } from 'date-fns'

const getDefaultDate = () => ({
  key: 'Today',
  value: new Date(),
})

const newTodo = {
  id: `${Date.now()}`,
  done: false,
  category: '1',
  description: '',
  location: '',
  date: null,
  icon: '',
  isAllDay: false,
}

const initialState = {
  isAllDay: false,
  todos: [],
  filters: {
    date: getDefaultDate(),
    status: 'All',
  },
}

const reducer = {
  [Actions.ADD_TODO]: (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
    newTodo,
  }),
  [Actions.DELETE_TODO]: (state, payload) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== payload.id),
  }),
  [Actions.TOGGLE_TODO_STATUS]: (state, payload) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.id === payload.id ? { ...todo, done: !todo.done } : todo,
    ),
  }),
  [Actions.COMPLETE_ALL_TODOS]: (state, payload) => ({
    ...state,
    todos: state.todos.map(todo =>
      !todo.done && isSameDay(todo.date, payload.date)
        ? { ...todo, done: true }
        : todo,
    ),
  }),
  [Actions.DELETE_ALL_TODOS]: (state, payload) => ({
    ...state,
    todos: state.todos.filter(todo => !isSameDay(todo.date, payload.date)),
    filters: {
      ...state.filters,
      date: getDefaultDate(),
    },
  }),
  [Actions.UPDATE_TODO_DATE_FILTER]: (state, payload) => ({
    ...state,
    filters: {
      ...state.filters,
      date: {
        key: payload.key,
        value: payload.value,
      },
    },
  }),
  [Actions.UPDATE_TODO_STATUS_FILTER]: (state, payload) => ({
    ...state,
    filters: {
      ...state.filters,
      status: payload.status,
    },
  }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
