import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { findByTestAttr, checkProps } from 'utils/testsMethods'
import TodoAdd from '.'

const setUp = props => shallow(<TodoAdd {...props} />)

describe('TodoAdd Component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        toggleView: () => {},
      }

      const propsErr = checkProps(TodoAdd, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  let wrapper
  let mockToggleView

  beforeEach(() => {
    mockToggleView = jest.fn()
    const props = {
      toggleView: mockToggleView,
    }
    wrapper = setUp(props)
  })

  describe('Rendering', () => {
    it('should render without errors', () => {
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should render Add Task button', () => {
      const button = findByTestAttr(wrapper, 'button')

      expect(button.length).toBe(1)
      expect(
        button
          .children()
          .first()
          .text(),
      ).toBe('Add Task')
    })
  })

  describe('Interactions', () => {
    it('should emit toggle view on click event', () => {
      const button = findByTestAttr(wrapper, 'button')
      button.simulate('click')

      expect(mockToggleView).toHaveBeenCalled()
    })
  })
})
