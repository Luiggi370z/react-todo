import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { findByTestAttr, checkProps } from 'utils/testsMethods'
import Header from '.'

const setUp = (props = {}) => shallow(<Header {...props} />)
const createProps = props => ({
  title: 'Title',
  ...props,
})

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
    it('should render and matches the snapshot', () => {
      const props = createProps({
        rightContent: <div>node</div>,
        children: <div>node</div>,
      })
      const wrapper = findByTestAttr(setUp(props), 'headerWrapper')

      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should render without errors', () => {
      const wrapper = findByTestAttr(setUp(createProps()), 'headerWrapper')

      expect(wrapper.length).toBe(1)
    })

    it('should has invert class if invert is true', () => {
      const props = createProps({ invert: true })
      const headerContainer = findByTestAttr(setUp(props), 'headerContainer')

      expect(headerContainer.hasClass('invert')).toBeTruthy()
    })

    it('should render right content properly', () => {
      const props = createProps({ rightContent: <div>test</div> })
      const headerRightContent = setUp(props).find(
        `[data-test='headerRightContent']`,
      )

      expect(toJson(headerRightContent)).toMatchSnapshot()
    })

    it('should render children if exist as prop', () => {
      const children = <div>test</div>
      const props = createProps({ children })
      const headerContainer = setUp(props).find(`[data-test='headerContainer']`)

      expect(headerContainer.contains(children)).toBeTruthy()
    })

    it("should not render children if doesn't exist as prop", () => {
      const children = <div>test</div>
      const headerContainer = setUp(createProps()).find(
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
