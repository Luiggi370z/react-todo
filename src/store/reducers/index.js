import { combineReducers } from 'redux'
import RootReducer from './root.reducer'
import TodoReducer from './todo.reducer'

export default combineReducers({
  root: RootReducer,
  todos: TodoReducer,
})
