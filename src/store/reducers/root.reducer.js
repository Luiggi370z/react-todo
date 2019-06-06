import TOGGLE_VIEW from 'store/actions/root/action-types'

const initialState = {
  viewAll: true,
}

const reducer = {
  [TOGGLE_VIEW]: state => ({ ...state, viewAll: !state.viewAll }),
}

export default (state = initialState, { type, payload }) =>
  reducer[type] ? reducer[type](state, payload) : state
