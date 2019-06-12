import TOGGLE_VIEW from 'store/actions/root/action-types'
import rootReducer from './root.reducer'

describe('Root Reducer', () => {
  it('should return default state', () => {
    const newState = rootReducer(undefined, {})

    expect(newState).toEqual({
      viewAll: true,
    })
  })

  test('should return new state if receiving type', () => {
    const newState = rootReducer(undefined, { type: TOGGLE_VIEW })

    expect(newState).toEqual({ viewAll: false })
  })
})
