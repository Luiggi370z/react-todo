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
        hasProps: false,
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

    test('should show text to encourage to add a task if there are no tasks yet', () => {
      const p = findByTestAttr(wrapper, 'message')
      const expectedText = "Nothing to do yet? Think about it and let's start!"

      expect(p.text()).toEqual(expectedText)
    })

    test('should notify user when he has tasks', () => {
      const props = {
        toggleView: mockToggleView,
        hasTasks: true,
      }
      wrapper = setUp(props)
      const p = findByTestAttr(wrapper, 'message')
      const expectedText =
        'Nice! Looks like you have some stuff to do, but you can have more!'

      expect(p.text()).toEqual(expectedText)
    })
  })
})
