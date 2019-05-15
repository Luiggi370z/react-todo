import React from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem } from '@blueprintjs/core'
import Categories from '../../mocks/categories'

const CategorySelector = props => {
  return (
    <Menu>
      {Categories.map(category => (
        <MenuItem key={category.id} text={category.name} icon={'dot'} />
      ))}
    </Menu>
  )
}

CategorySelector.propTypes = {}

export default CategorySelector
