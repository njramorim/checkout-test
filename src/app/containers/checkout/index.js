import React from 'react'
import PropTypes from 'prop-types'
import {
  getCheckoutData,
  submitCheckout,
  summaryFields,
  noCoupon
} from '../../data-handlers'

import { radioItem, summaryItem } from './items'
import CheckoutModal from './modal'
import CheckoutForm from './form'
import ProductImage from '../../components/product-image'
import Wrapper from '../../components/wrapper'

class Checkout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: {
        isReady: false,
        hasErrors: false
      },
      useCoupon: false,
      checkout: {
        availableCoupons: [],
        shippingPrice: 0,
        totalPrice: 0
      },
      product: {
        price: 0
      }
    }

    this.handleCheckoutData = this.handleCheckoutData.bind(this)
    this.handleError = this.handleError.bind(this)
    this.handleCoupon = this.handleCoupon.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { params } = this.props

    getCheckoutData(params.checkoutId)
      .then(response => this.handleCheckoutData(response.data))
      .catch(error => this.handleError(error))
  }

  handleCheckoutData(data) {
    const { checkout, product } = data
    this.setState({
      checkout,
      product,
      status: {
        isReady: true,
        hasAlert: false,
        isLoading: false,
        hasError: false
      }
    })
  }

  handleError() {
    this.setState({
      status: {
        hasError: true
      }
    })
  }

  handleCoupon({ target }) {
    const { value } = target
    const { checkout } = this.state
    const isDiscount = Number(value) !== 0 ? value : false

    this.setState({
      status: {
        isReady: true,
        isLoading: true
      }
    })

    const couponData = data =>
      this.setState({
        status: {
          isReady: true,
          isLoading: false
        },
        useCoupon: isDiscount,
        checkout: data.checkout
      })

    getCheckoutData(checkout.id, isDiscount)
      .then(({ data }) => couponData(data))
      .catch(error => this.handleError(error))
  }

  handleSubmit() {
    const { checkout } = this.state

    submitCheckout(checkout.id).then(({ data }) => {
      this.setState({
        status: {
          isReady: true,
          hasAlert: data.status
        }
      })
    })
  }

  handleCancel() {
    this.setState({
      status: {
        isReady: true,
        hasAlert: 'warning'
      }
    })
  }

  render() {
    const { product, checkout, useCoupon, status } = this.state
    const { isReady, hasError, isLoading, hasAlert } = status

    const coupons = data =>
      [noCoupon, ...data].map(coupon => radioItem(coupon, this.handleCoupon))

    const showWichItems = item => (useCoupon && item.coupon) || !item.coupon

    const selectedCouponPrice = data => {
      const selected = data.find(coupon => coupon.id === Number(useCoupon))
      return selected.discount
    }

    const prices = {
      originalValue: product.price,
      coupon: useCoupon ? selectedCouponPrice(checkout.availableCoupons) : 0,
      shipping: checkout.shippingPrice,
      total: checkout.totalPrice
    }
    return (
      <React.Fragment>
        {hasError && 'ooops'}
        {isReady && (
          <Wrapper>
            <ProductImage
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
            />

            <CheckoutForm
              coupons={coupons(checkout.availableCoupons)}
              summary={summaryFields(prices).map(
                field => showWichItems(field) && summaryItem(field)
              )}
              handleCancel={this.handleCancel}
              handleSubmit={this.handleSubmit}
            />

            <CheckoutModal isLoading={isLoading} hasAlert={hasAlert} />
          </Wrapper>
        )}
      </React.Fragment>
    )
  }
}

Checkout.propTypes = {
  params: PropTypes.object
}

export default Checkout
