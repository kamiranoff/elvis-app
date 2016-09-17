module.exports =  [
  {
    test: /\.css$/,
    exclude: /node_modules/,
    loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
  }, {
    test: /\.css$/,
    include: /node_modules/,
    loaders: ['style-loader', 'css-loader'],
  }, {
    test: /\.jsx*$/,
    exclude: [/node_modules/, /.+\.config.js/],
    loader: 'babel',
  }, {
    test: /\.(jpe?g|gif|png|svg)$/i,
    loader: 'url-loader?limit=10000',
  }, {
    test: /\.json$/,
    loader: 'json-loader',
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file',
  },
  {
    test: /\.(woff|woff2)$/,
    loader: 'url?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream',
  },
]
