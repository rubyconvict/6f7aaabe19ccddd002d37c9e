var webpack = require('webpack');
var path = require('path');
var objectAssign = require('object-assign');

var NODE_ENV = process.env.NODE_ENV;

var env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

objectAssign(env, {
  build: (env.production || env.staging)
});

var port = 8000;
var host = '127.0.0.1';
var srcPath = path.join(__dirname, '/../src');
var publicPath = '/assets/';

module.exports = {
  port: port,
  host: host,
  output: {
    // path.join(process.cwd(), '/client'),
    path: path.join(__dirname, '/../dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[id].[hash].bundle.js',
    // publicPath: publicPath
    pathInfo: true,
    publicPath: 'http://localhost:3000' + publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    debug: true,
    port: port,
    host: host,
    publicPath: publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: srcPath + '/actions/',
      components: srcPath + '/components/',
      sources: srcPath + '/sources/',
      stores: srcPath + '/stores/',
      styles: srcPath + '/styles/'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }
    ],
    noParse: /\.min\.js/
  }
};
