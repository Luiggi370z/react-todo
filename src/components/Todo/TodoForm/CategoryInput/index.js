import React from 'react'
import PropTypes from 'prop-types'
import Categories from 'mocks/categories'
import { InputGroup } from 'components/ui'
import CategorySelector from '../CategoryMenu'
import { Popover, Position, Icon } from '@blueprintjs/core'
import styles from './index.module.scss'

const CategoryInput = ({ category, onSelect }) => {
  return (
    <Popover
      minimal
      canEscapeKeyClose
      content={<CategorySelector onSelect={onSelect} field='category' />}
      position={Position.BOTTOM_LEFT}>
      <InputGroup
        className={styles[category]}
        value={Categories[category]}
        canClear={false}
        readOnly>
        <Icon icon='symbol-circle' />
      </InputGroup>
    </Popover>
  )
}

CategoryInput.propTypes = {
  category: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CategoryInput
