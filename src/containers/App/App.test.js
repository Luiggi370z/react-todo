import React from 'react'
import { shallow } from 'enzyme'
import App from '.'

const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`)

describe('App Container', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />)
    const wrapper = findByTestAttr(component, 'root')

    expect(wrapper.length).toBe(1)
  })
})
