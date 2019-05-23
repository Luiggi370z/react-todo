import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const availableIcons = [
  'chat',
  'highlight',
  'path-search',
  'print',
  'airplane',
  'drive-time',
  'envelope',
  'people',
  'camera',
  'headset',
  'mobile-video',
  'briefcase',
  'calculator',
  'heart',
  'office',
  'shop',
  'shopping-cart',
  'tree',
  'wrench',
  'dollar'
]

const AvatarSelector = ({ field, onSelect }) => {
  const handleChange = e => {
    onSelect({
      target: {
        value: e.target.name,
        name: field
      }
    })
  }

  return (
    <div className={styles.root}>
      {availableIcons.map(name => (
        <div key={name}>
          <Button
            minimal
            large
            name={name}
            icon={name}
            onClick={handleChange}
          />
        </div>
      ))}
    </div>
  )
}

AvatarSelector.propTypes = {
  field: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default AvatarSelector
