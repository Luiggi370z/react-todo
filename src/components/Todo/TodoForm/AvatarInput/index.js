import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from 'components/ui'
import AvatarSelector from '../AvatarMenu'
import { Popover, Position, Icon } from '@blueprintjs/core'
import styles from './index.module.scss'

const AvatarInput = ({ icon, onSelect }) => {
  return (
    <Popover
      canEscapeKeyClose
      closeOnSelection
      content={<AvatarSelector onSelect={onSelect} field='icon' />}
      position={Position.BOTTOM}>
      <Avatar
        large
        icon={icon || 'plus'}
        disabled={!icon}
        value={icon}
        badge={
          icon ? (
            <Icon icon='edit' size={'12'} className={styles.badge} />
          ) : (
            <span className={styles.required}>*</span>
          )
        }
      />
    </Popover>
  )
}

AvatarInput.propTypes = {
  icon: PropTypes.string,
  onSelect: PropTypes.func.isRequired
}

export default AvatarInput
