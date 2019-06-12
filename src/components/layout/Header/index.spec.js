import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from 'utils/testsMethods'
import Header from '.'

const setUp = (props = {}) => shallow(<Header {...props} />)

describe('Header Component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'String',
        subtitle: 'String',
        invert: true,
        rightContent: <div>node</div>,
        children: <div>node</div>,
      }

      const propsErr = checkProps(Header, expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

  describe('Have Props', () => {
    it('should render without errors', () => {
      const props = { title: 'Test' }
      const wrapper = findByTestAttr(setUp(props), 'headerWrapper')

      expect(wrapper.length).toBe(1)
    })

    it('should has invert class if invert is true', () => {
      const props = { title: 'Test', invert: true }
      const headerContainer = findByTestAttr(setUp(props), 'headerContainer')

      expect(headerContainer.hasClass('invert')).toBeTruthy()
    })

    it('should render right content properly', () => {
      const rightContent = <div>test</div>
      const props = { title: 'Test', rightContent }
      const headerRightContent = setUp(props).find(
        `[data-test='headerRightContent']`,
      )

      expect(headerRightContent.contains(rightContent)).toBeTruthy()
    })

    it('should render children if exist as prop', () => {
      const children = <div>test</div>
      const props = { title: 'Test', children }
      const headerContainer = shallow(<Header {...props} />).find(
        `[data-test='headerContainer']`,
      )

      expect(headerContainer.contains(children)).toBeTruthy()
    })

    it("should not render children if doesn't exist as prop", () => {
      const children = <div>test</div>
      const props = { title: 'Test' }
      const headerContainer = shallow(<Header {...props} />).find(
        `[data-test='headerContainer']`,
      )

      expect(headerContainer.contains(children)).toBeFalsy()
    })
  })

  describe('Have NO Props', () => {
    it('should throw a warning', () => {
      const propsErr = checkProps(Header, {})
      expect(propsErr).toBeDefined()
    })
  })
})
