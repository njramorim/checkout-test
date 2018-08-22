import CleanWebpackPlugin from 'clean-webpack-plugin'
import CSS from './conf/style'
import HTML from './conf/markup'
import JS from './conf/script'
import IMG from './conf/images'

const OUTPUT = './dist'

export default {
  output: {
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  module: {
    rules: [CSS.rule, HTML.rule, IMG.rule, JS.rule, JS.lint.rule]
  },
  optimization: {
    minimizer: [new CleanWebpackPlugin([OUTPUT]), CSS.minimizer, JS.minimizer]
  },
  plugins: [CSS.plugin, HTML.plugin]
}
