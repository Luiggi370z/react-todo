import React from 'react'
import PropTypes from 'prop-types'
import { Classes } from '@blueprintjs/core'
import styles from './index.module.scss'

const ContentLayout = ({ activeRight, left, right, overlay }) => {
  const rootClasses = [
    styles.root,
    Classes.ELEVATION_4,
    activeRight ? 'right-active' : '',
  ].join(' ')

  return (
    <div className={rootClasses}>
      <div className={styles.leftContainer}>{left}</div>
      <div className={styles.rightContainer}>{right}</div>
      <div className={styles.overlayContainer}>{overlay}</div>
    </div>
  )
}

ContentLayout.propTypes = {
  activeRight: PropTypes.bool,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
  overlay: PropTypes.node.isRequired,
}

ContentLayout.defaultProps = {
  activeRight: false,
}

export default ContentLayout
