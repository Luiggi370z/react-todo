import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, Icon } from '@blueprintjs/core'
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
  'dollar',
]

const AvatarMenu = ({ field, onSelect }) => {
  const handleChange = e => {
    onSelect({
      target: {
        value: e.target.name,
        name: field,
      },
    })
  }

  return (
    <Menu className={styles.grid}>
      {availableIcons.map(name => (
        <MenuItem
          key={name}
          name={name}
          className={styles.item}
          onClick={handleChange}
          labelElement={<Icon icon={name} />}
        />
      ))}
    </Menu>
  )
}

AvatarMenu.propTypes = {
  field: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default AvatarMenu
