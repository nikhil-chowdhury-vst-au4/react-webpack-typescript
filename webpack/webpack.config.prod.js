const webpack = require('webpack')

const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const config = {
  mode: 'production',
  devtool: 'source-map',
}

module.exports = merge(baseConfig, config)
