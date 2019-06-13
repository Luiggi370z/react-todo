import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'
import reducers from 'store/reducers'

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`)

export const checkProps = ({ propTypes, name }, expectedProps) =>
  checkPropTypes(propTypes, expectedProps, 'props', name)

export const testStore = initialState => createStore(reducers, initialState)
