import React from 'react'
import { shallow } from 'enzyme'
import { testStore } from 'utils/testsMethods'
import Todos from '.'

const setUp = (initialState = {}) => {
  const store = testStore(initialState)
  const wrapper = shallow(<Todos store={store} />)
    .childAt(0) // Remove Redux Provider wrapper
    .dive() // Render the one child - for containers or connected components
  return wrapper
}

describe('Todos Container', () => {
  let wrapper

  beforeEach(() => {
    const initialState = {
      root: {
        viewAll: true,
      },
      todos: {
        isAllDay: false,
        todos: [],
        filters: {
          date: {
            key: 'Today',
            value: new Date(),
          },
          status: 'All',
        },
      },
    }

    wrapper = setUp(initialState)
  })

  test('should render without errors', () => {
    expect(wrapper.length).toBe(1)
  })
})
