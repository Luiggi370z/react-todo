import React from 'react'
import PropTypes from 'prop-types'
import Categories from 'mocks/categories'
import { InputGroup } from 'components/ui'
import { Popover, Position, Icon } from '@blueprintjs/core'
import CategorySelector from '../CategoryMenu'
import styles from './index.module.scss'

const CategoryInput = ({ category, onSelect }) => {
  return (
    <Popover
      minimal
      canEscapeKeyClose
      content={<CategorySelector onSelect={onSelect} field="category" />}
      position={Position.BOTTOM_LEFT}
    >
      <InputGroup
        className={styles[category]}
        value={Categories[category]}
        canClear={false}
        placeholder="Category *"
        readOnly
      >
        {category && <Icon icon="symbol-circle" />}
      </InputGroup>
    </Popover>
  )
}

CategoryInput.propTypes = {
  category: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

CategoryInput.defaultProps = {
  category: '1',
}

export default CategoryInput
