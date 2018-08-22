import HtmlWebPackPlugin from 'html-webpack-plugin'
import { isProduction } from './_utils'

export default {
  rule: {
    test: /\.html$/,
    use: {
      loader: 'html-loader',
      options: {
        minimize: isProduction
      }
    }
  },
  plugin: new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
  })
}
