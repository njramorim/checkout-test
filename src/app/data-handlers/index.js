import axios from 'axios'

const CHECKOUT_API = '/api/checkouts/'

export const getCheckoutData = (checkoutId, couponId = false) =>
  axios.get(`${CHECKOUT_API}${checkoutId}?couponId=${couponId}`)

export const submitCheckout = checkoutId =>
  axios.post(`${CHECKOUT_API}${checkoutId}`)

export const summaryFields = prices => [
  {
    title: 'valor original',
    price: prices.originalValue
  },
  {
    title: 'cupom',
    status: 'discount',
    price: prices.coupon,
    coupon: true
  },
  {
    title: 'frete',
    price: prices.shipping
  },
  {
    title: 'total',
    status: 'total',
    price: prices.total
  }
]

export const noCoupon = {
  id: 0,
  checked: true,
  title: 'não usar cupom'
}
