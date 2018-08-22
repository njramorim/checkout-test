import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { money } from '../../utils'
import style from './style.scss'

const STATUS = [null, 'discount', 'total']

const itemClass = status =>
  classnames(
    style.priceItem,
    status === STATUS[1] && style.priceItemDiscount,
    status === STATUS[2] && style.priceItemTotal
  )

const PriceField = ({ title, price, status }) => (
  <span className={itemClass(status)}>
    <span className={style.type}>{title}</span>
    {price && (
      <span className={style.price}>
        {status === STATUS[1] && '- '}
        {money(price)}
      </span>
    )}
  </span>
)

PriceField.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  status: PropTypes.oneOf(STATUS)
}

PriceField.defaultProps = {
  status: null,
  price: false
}

export default PriceField
