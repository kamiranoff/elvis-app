var webpack = require('webpack');
var path = require('path');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var vars = require('postcss-simple-vars');
const loaders = require('./webpack.loaders');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],

  postcss: () => [
    require('postcss-mixins'),
    require('postcss-nested'),
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
    vars({
      variables() {
        const colors = './client/assets/styles/colors.js';
        const fonts = './client/assets/styles/fonts.js';
        delete require.cache[path.join(__dirname, colors)];
        delete require.cache[path.join(__dirname, fonts)];
        return {
          ...require(colors),
          ...require(fonts),
        };
      }
    }),
  ],
};
