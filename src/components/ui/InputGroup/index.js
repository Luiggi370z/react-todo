import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const getHTMLProps = ({
  readOnly,
  name,
  placeholder,
  value,
  autoComplete,
}) => ({
  readOnly,
  name,
  placeholder,
  value,
  autoComplete,
})

const InputGroup = props => {
  const { className, value, onChange, canClear, children } = props
  const handleClear = () => {
    props.onClear(props.name)
  }

  return (
    <div className={`${styles.inputGroup} ${className || ''}`}>
      <input {...getHTMLProps(props)} onChange={onChange} />
      {canClear && value && (
        <Button icon="cross" minimal onClick={handleClear} tabIndex={-1} />
      )}
      {children}
    </div>
  )
}

InputGroup.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  canClear: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

InputGroup.defaultProps = {
  name: '',
  onClear: null,
  canClear: false,
  className: null,
  children: null,
  onChange: null,
}

export default InputGroup
