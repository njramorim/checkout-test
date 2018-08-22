import currencyFormatter from 'currency-formatter'

export const money = val => currencyFormatter.format(val, { locale: 'BR' })
