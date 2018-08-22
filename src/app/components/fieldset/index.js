import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const Fieldset = ({ title, children }) => (
  <fieldset className={style.fieldset}>
    <legend className={style.legend}>{title}</legend>
    {children}
  </fieldset>
)

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Fieldset
