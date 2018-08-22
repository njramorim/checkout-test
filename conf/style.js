import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import { isProduction } from './_utils'

const envCssLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader'

export default {
  minimizer: new OptimizeCSSAssetsPlugin({}),
  rule: {
    test: /\.(sa|sc|c)ss$/,
    use: [
      { loader: envCssLoader },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
      { loader: 'sass-loader' }
    ]
  },
  plugin: new MiniCssExtractPlugin({
    filename: isProduction ? '[name].[hash].css' : '[name].css',
    chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
  })
}
