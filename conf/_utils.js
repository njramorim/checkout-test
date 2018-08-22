const { NODE_ENV } = process.env

export const isProduction = NODE_ENV === 'production'
