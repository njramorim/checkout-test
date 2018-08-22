import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const Form = ({ children }) => <form className={style.form}>{children}</form>

Form.propTypes = {
  children: PropTypes.node.isRequired
}

export default Form
