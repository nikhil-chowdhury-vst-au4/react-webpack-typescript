const webpack = require('webpack')
const BundeleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.config.base");


const config = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
    new BundeleAnalyzerPlugin(),
  ],
}

module.exports = merge(baseConfig, config)