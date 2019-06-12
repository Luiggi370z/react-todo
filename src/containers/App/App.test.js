import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from 'utils/testsMethods'
import App from '.'

describe('App Container', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />)
    const wrapper = findByTestAttr(component, 'root')

    expect(wrapper.length).toBe(1)
  })
})
