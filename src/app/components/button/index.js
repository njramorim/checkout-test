import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const STATUS = ['confirm', 'cancel']

const Button = ({ action, text, status }) => (
  <button
    className={style.button}
    data-status={status}
    onClick={action}
    type="button"
  >
    <span className={style.buttonText}>{text}</span>
  </button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  status: PropTypes.oneOf(STATUS)
}

Button.defaultProps = {
  status: STATUS[0]
}

export default Button
