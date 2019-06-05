import * as Actions from 'store/actions/todo/action-types'
import { dateToCalendar } from 'utils'
import { isSameDay } from 'date-fns'

const omit = (source, property) =>
  Object.keys(source).reduce((obj, key) => {
    if (key !== property) {
      obj[key] = { ...source[key] }
    }
    return obj
  }, {})

const getDefaultDate = () => ({
  key: 'Today',
  value: new Date()
})

const newTodo = {
  id: `${Date.now()}`,
  category: '1',
  description: '',
  location: '',
  done: false,
  icon: '',
  isAllDay: false
}

const initialState = {
  newTodo,
  isAllDay: false,
  todos: {
    byId: {},
    byDate: {}
  },
  filters: {
    date: getDefaultDate(),
    status: 'All'
  }
}

const reducer = {
  [Actions.ADD_TODO]: (state, payload) => ({
    ...state,
    todos: {
      byId: {
        ...state.todos.byId,
        [payload.todo.id]: payload.todo
      }
    },
    newTodo
  }),
  [Actions.DELETE_TODO]: (state, payload) => {
    const dateId = dateToCalendar(state.todos.byId[payload.id].date)

    return {
      ...state,
      todos: {
        byId: omit(state.todos.byId, payload.id),
        byDate:
          state.todos.byDate[dateId].length === 1
            ? omit(state.todos.byDate, dateId)
            : state.todos.byDate[dateId].filter(id => id !== payload.id)
      }
    }
  },
  [Actions.TOGGLE_TODO_STATUS]: (state, payload) => ({
    ...state,
    todos: {
      ...state.todos,
      byId: {
        ...state.todos.byId,
        [payload.id]: {
          ...state.todos.byId[payload.id],
          done: !state.todos.byId[payload.id].done
        }
      }
    }
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
    todos: state.todos.filter(todo => !isSameDay(todo.date, payload.date)),
    filters: {
      ...state.filters,
      date: getDefaultDate()
    }
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
  })
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
