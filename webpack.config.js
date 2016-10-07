var path = require('path');
var webpack = require('webpack');


module.exports = {
  context: __dirname,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/navigation.js'
  ],
  output: {
    path: __dirname + '/js',
    filename: 'navigation.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader?{presets:["react", "es2015"]}']
      },
      {
        test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'json'
      },
      { test: /\.js$/, loader: 'exports-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map"
};
