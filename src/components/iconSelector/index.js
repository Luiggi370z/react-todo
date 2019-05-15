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

const IconSelector = props => {
  return (
    <div className={styles.root}>
      {availableIcons.map(name => (
        <div key='name'>
          <Button icon={name} minimal large />
        </div>
      ))}
    </div>
  )
}

IconSelector.propTypes = {}

export default IconSelector
