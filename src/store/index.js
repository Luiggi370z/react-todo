import { createStore } from 'redux'
import reducers from './reducers'

const configureStore = (initialState = {}) => {
  return createStore(reducers, initialState)
}
const store = configureStore({})

export default store
