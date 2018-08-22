import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const lint = {
  rule: {
    test: /\.js$/,
    exclude: /(node_modules|dist)/,
    use: ['babel-loader', 'eslint-loader']
  }
}

export default {
  minimizer: new UglifyJsPlugin({
    cache: true,
    parallel: true,
    sourceMap: true,
    extractComments: true
  }),
  rule: {
    test: /\.js$/,
    exclude: /(node_modules|dist)/,
    use: ['babel-loader']
  },
  lint
}
