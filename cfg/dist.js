var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./base');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var assetsWebpackPlugin = require('assets-webpack-plugin');

var config = _.merge({
  entry: {
    app: path.join(__dirname, '../src/components/run'),
    vendor: ['react'],
    profile_page: [path.join(__dirname, '../src/components/profile_page')],
    some_page: [path.join(__dirname, '../src/components/some_page')]
  },
  debug: false,
  profile: false,
  bail: true,
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new assetsWebpackPlugin({
      path: path.join(__dirname, '../'),
      filename: 'assets.json',
      prettyPrint: true,
      update: true
    }),
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }), // [contenthash]
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'app'],
      filename: 'index.html',
      template: path.join(__dirname, '../src/dist.html'),
      meta: {}
    })
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: path.join(__dirname, '/../src')
});

config.module.loaders.push({
  test: /\.css$/,
  // loader: 'style!css'
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
});

module.exports = config;
