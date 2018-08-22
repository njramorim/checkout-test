import React from 'react'
import PropTypes from 'prop-types'

import style from './style.scss'

const ProductImage = ({ id, image, price, title }) => (
  <figure className={style.productImage} data-ref={id}>
    <img className={style.photo} src={image} alt={title} />
    <figcaption className={style.legend}>{`${title} - ${price}`}</figcaption>
  </figure>
)

ProductImage.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default ProductImage
