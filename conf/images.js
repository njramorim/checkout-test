import { isProduction } from './_utils'

export default {
  rule: {
    test: /\.(jpg|png|gif|svg)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 2500,
          name: isProduction ? '[name].[hash].[ext]' : '[path]-[name].[ext]',
          outputPath: isProduction ? './assets/images' : './'
        }
      }
    ]
  }
}
