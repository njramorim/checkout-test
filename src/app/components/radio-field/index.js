import React from 'react'
import PropTypes from 'prop-types'
// import { money } from '../../utils'

import style from './style.scss'

const RadioField = ({ checked, id, name, onChange, children }) => (
  <label htmlFor={`name-${id}`} className={style.radioField}>
    <input
      type="radio"
      id={`name-${id}`}
      value={id}
      name={name}
      defaultChecked={checked}
      className={style.input}
      onChange={onChange}
    />
    <i className={style.radioIcon} />
    <p className={style.text}>{children}</p>
  </label>
)

RadioField.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

RadioField.defaultProps = {
  checked: false
}

export default RadioField
