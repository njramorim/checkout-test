import React from 'react'

import RadioField from '../../components/radio-field'
import PriceField from '../../components/price-field'

export const radioItem = (item, onChange) => (
  <li key={item.id}>
    <RadioField
      id={item.id}
      checked={item.checked}
      name="coupon"
      onChange={onChange}
    >
      <PriceField
        title={item.title}
        status={item.discount ? 'discount' : null}
        price={item.discount}
      />
    </RadioField>
  </li>
)

export const summaryItem = item => (
  <li key={item.title}>
    <PriceField title={item.title} status={item.status} price={item.price} />
  </li>
)
