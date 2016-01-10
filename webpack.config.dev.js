var path = require('path');
var webpack = require('webpack');
var mergeWebpackConfig = require('webpack-config-merger');

module.exports = mergeWebpackConfig(require('./webpack.config.js'), {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});