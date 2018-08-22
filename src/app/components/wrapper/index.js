import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const Wrapper = ({ children }) => (
  <section className={style.wrapper}>{children}</section>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
