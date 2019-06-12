import checkPropTypes from 'check-prop-types'

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`)

export const checkProps = ({ propTypes, name }, expectedProps) =>
  checkPropTypes(propTypes, expectedProps, 'props', name)
