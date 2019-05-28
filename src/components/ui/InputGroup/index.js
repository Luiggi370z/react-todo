import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { Button } from '@blueprintjs/core'

const getHTMLProps = ({
  readOnly,
  name,
  placeholder,
  value,
  autoComplete
}) => ({
  readOnly,
  name,
  placeholder,
  value,
  autoComplete
})

const InputGroup = props => {
  const handleClear = () => {
    props.onClear(props.name)
  }

  return (
    <div className={`${styles.inputGroup} ${props.className || ''}`}>
      <input {...getHTMLProps(props)} onChange={props.onChange} />
      {props.canClear && props.value && (
        <Button icon={'cross'} minimal onClick={handleClear} />
      )}
      {props.children}
    </div>
  )
}

InputGroup.defaultProps = {
  canClear: true
}

InputGroup.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  canClear: PropTypes.bool
}

export default InputGroup
