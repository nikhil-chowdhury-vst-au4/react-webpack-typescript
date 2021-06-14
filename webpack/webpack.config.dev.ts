import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.config.base'
import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
//import { ContentfulTsGeneratorPlugin } from 'contentful-ts-generator'

// TODO: Fix this once the types are fixed
// quick fix https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570
interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const config: Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}

export default merge(baseConfig, config)
