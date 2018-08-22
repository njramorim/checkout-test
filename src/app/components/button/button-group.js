import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const ButtonGroup = ({ children }) => (
  <div className={style.buttonGroup}>{children}</div>
)

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired
}

export default ButtonGroup
