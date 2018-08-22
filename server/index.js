const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(express.static(`${__dirname}/../dist`, { index: false }))

server.get('/', (req, res) => {
  res.redirect('/produto/1321/checkout/6544')
})

server.get('/produto/:productId/checkout/:checkoutId', (req, res) => {
  res.sendFile('index.html', { root: './dist/' })
})

const coupon = {
  id: 3,
  title: 'black friday',
  discount: 35
}

const product = {
  id: 1321,
  title: 'vestido floral',
  price: 100,
  image:
    'https://res-5.cloudinary.com/enjoei/image/upload/c_fill,fl_lossy.progressive,h_398,q_70,w_375/qzancxcixtocajlrgztv.jpg'
}

const checkout = {
  id: 6544,
  productId: 1321,
  shippingPrice: 20,
  availableCoupons: [coupon]
}

server.get('/api/checkouts/:checkoutId', (req, res) => {
  checkout.totalPrice = product.price + checkout.shippingPrice

  if (parseInt(req.query.couponId, 10) === coupon.id) {
    checkout.totalPrice -= coupon.discount
  }

  res.json({ product, checkout })
})

server.post('/api/checkouts/:checkoutId', (req, res) => {
  res.json({ status: 'success' })
})

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
