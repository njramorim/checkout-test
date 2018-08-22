import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const STATUS = ['error', 'warning', 'success']

const Alert = ({ description, image, status, title }) => (
  <div data-status={status} className={style.alert}>
    {image && <img className={style.image} src={image} alt={title} />}
    <p className={style.title}>{title}</p>
    <p className={style.description}>{description}</p>
  </div>
)

Alert.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.oneOf(STATUS).isRequired,
  title: PropTypes.string.isRequired
}

export default Alert
